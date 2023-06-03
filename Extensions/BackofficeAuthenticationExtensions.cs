using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.Extensions.DependencyInjection;
namespace MyCustomUmbracoProject.Extensions
{
    public static class BackofficeAuthenticationExtensions
    {
        public static IUmbracoBuilder ConfigureAuthentication(this IUmbracoBuilder builder)
        {
            builder.AddBackOfficeExternalLogins(logins =>
            {
                const string schema = MicrosoftAccountDefaults.AuthenticationScheme;

                logins.AddBackOfficeLogin(
                    backOfficeAuthenticationBuilder =>
                    {
                        backOfficeAuthenticationBuilder.AddOpenIdConnect(
                            // the scheme must be set with this method to work for the back office
                            backOfficeAuthenticationBuilder.SchemeForBackOffice(schema) ?? string.Empty,
                            options =>
                            {
                                var config = builder.Config;
                                // options.ResponseMode = "fragment";
                                options.ResponseType = "id_token";
                                // options.Scope.Add("https://my.visatitans.com/api/vt.read.everything");

                                //options.Scope.Add("address");
                                options.RequireHttpsMetadata = true;

                                options.ClientId = config["OpenIdConnect:ClientId"];//"85f11fbf-6807-4285-8b3f-9ef5e35b4983";
                                //options.ClientSecret = config["OpenIdConnect:ClientSecret"];//"0bfe7f12-fef9-4b5b-8ce5-4f207c911660";
                                options.CallbackPath = "/login-callback";//"/login-callback";
                                options.MetadataAddress = config["OpenIdConnect:MetadataAddress"];//"https://sergiuazureadb2c.b2clogin.com/sergiuazureadb2c.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signin";

                                // map claims
                                options.TokenValidationParameters.NameClaimType = "name";
                                options.TokenValidationParameters.RoleClaimType = "role";

                                options.Prompt = "login";

                                //options.ClaimActions.MapJsonKey(claimType: ClaimTypes.Email, jsonKey: "email");
                                options.Scope.Add("email");
                                options.Scope.Add("openid");
                                options.Scope.Add("profile");
                                options.Scope.Add("offline_access");

                                options.UsePkce = true;
                                options.GetClaimsFromUserInfoEndpoint = true;
                                options.TokenValidationParameters.SaveSigninToken = true;
                                options.SaveTokens = true;
                            });
                    });
            });
            return builder;
        }
    }
}
