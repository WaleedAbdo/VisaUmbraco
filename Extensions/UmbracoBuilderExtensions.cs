namespace MyCustomUmbracoProject.Extensions
{
    using System.Net;
    using System.Security.Claims;
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.IdentityModel.Tokens;
    using Provider;
    using Umbraco.Cms.Core.DependencyInjection;
    using Umbraco.Cms.Core.Security;
    using Umbraco.Extensions;

    public static class UmbracoBuilderExtensions
    {
        public static IUmbracoBuilder AddOpenIdConnectAuthentication(this IUmbracoBuilder builder)
        {
            builder.Services.ConfigureOptions<OpenIdConnectMemberExternalLoginProviderOptions>();

            builder.AddMemberExternalLogins(logins =>
            {
                logins.AddMemberLogin(
                    memberAuthenticationBuilder =>
                    {
                        memberAuthenticationBuilder.AddOpenIdConnect(
                            // The scheme must be set with this method to work for the umbraco members
                            memberAuthenticationBuilder.SchemeForMembers(OpenIdConnectMemberExternalLoginProviderOptions.SchemeName),
                            options =>
                            {
                                var config = builder.Config;
                                //options.ResponseType = "code";
                                options.ResponseType = "id_token token";
                                options.Scope.Add("https://my.visatitans.com/api/vt.read.everything");
                                options.Scope.Add("openid");
                                options.Scope.Add("email");
                                options.Scope.Add("profile");
                                options.Scope.Add("offline_access");
                                options.Scope.Add("address");
                                options.RequireHttpsMetadata = true;

                                options.ClientId = config["OpenIdConnect:ClientId"];//"85f11fbf-6807-4285-8b3f-9ef5e35b4983";
                                //options.ClientSecret = config["OpenIdConnect:ClientSecret"];//"0bfe7f12-fef9-4b5b-8ce5-4f207c911660";
                                options.CallbackPath = "/login-callback";//"/signin-oidc";
                                options.MetadataAddress = config["OpenIdConnect:MetadataAddress"];//"https://sergiuazureadb2c.b2clogin.com/sergiuazureadb2c.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signin";

                                //options.UsePkce = true;
                                options.GetClaimsFromUserInfoEndpoint = true;
                                options.TokenValidationParameters.SaveSigninToken = true;
                                options.SaveTokens = true;

                                options.Events.OnTokenValidated = async context =>
                                {

                                    var claims = context?.Principal?.Claims.ToList();
                                    var email = claims?.SingleOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
                                    if (email != null)
                                    {
                                        // The email claim is required for auto linking.
                                        // So get it from another claim and put it in the email claim.
                                        claims?.Add(new Claim(ClaimTypes.Email, email.Value));
                                    }

                                    var name = claims?.SingleOrDefault(x => x.Type == "name");
                                    if (name != null)
                                    {
                                        // The name claim is required for auto linking.
                                        // So get it from another claim and put it in the name claim.
                                        claims?.Add(new Claim(ClaimTypes.Name, name.Value));
                                    }

                                    var claimsIdentity = context.Principal.Identity as ClaimsIdentity;
                                    if (claimsIdentity != null)
                                    {
                                        var idToken = claimsIdentity.BootstrapContext.ToString();
                                        if (!string.IsNullOrEmpty(idToken))
                                        {
                                            claims?.Add(new Claim("id_token", idToken));
                                        }
                                    }

                                    if (context != null)
                                    {
                                        // Since we added new claims create a new principal.
                                        var authenticationType = context.Principal?.Identity?.AuthenticationType;
                                        context.Principal = new ClaimsPrincipal(new ClaimsIdentity(claims, authenticationType));
                                    }

                                    await Task.FromResult(0);
                                };
                                options.Events.OnRedirectToIdentityProviderForSignOut = async notification =>
                                {
                                    var protocolMessage = notification.ProtocolMessage;

                                    var logoutUrl = config["OpenIdConnect:LogoutUrl"];
                                    var returnAfterLogout = config["OpenIdConnect:ReturnAfterLogout"];
                                    if (!string.IsNullOrEmpty(logoutUrl) && !string.IsNullOrEmpty(returnAfterLogout))
                                    {
                                        // Some external login providers require an IssuerAddress.
                                        // It requires the logout URL on the external login provider.
                                        // It also need the client_id and a URL which it needs to return to after logout.
                                        protocolMessage.IssuerAddress =
                                            $"{config["OpenIdConnect:LogoutUrl"]}" +
                                            $"?client_id={config["OpenIdConnect:ClientId"]}" +
                                            $"&returnTo={WebUtility.UrlEncode(config["OpenIdConnect:ReturnAfterLogout"])}";
                                    }

                                    // Since we're in a static extension method we need this approach to get the member manager. 
                                    var memberManager = notification.HttpContext.RequestServices.GetService<IMemberManager>();
                                    if (memberManager != null)
                                    {
                                        var currentMember = await memberManager.GetCurrentMemberAsync();

                                        // On the current member we can find all their login tokens from the external login provider.
                                        // These tokens are stored in the umbracoExternalLoginToken table.
                                        var idToken = currentMember?.LoginTokens.FirstOrDefault(x => x.Name == "id_token");
                                        if (idToken != null && !string.IsNullOrEmpty(idToken.Value))
                                        {
                                            // Some external login providers need the IdTokenHint.
                                            // By setting the IdTokenHint the user can be redirected back from the external login provider to this website. 
                                            protocolMessage.IdTokenHint = idToken.Value;
                                        }
                                    }

                                    await Task.FromResult(0);
                                };
                            });
                    });
            });
            return builder;
        }
    }



}
