using Microsoft.Extensions.DependencyInjection;
using MyCustomUmbracoProject.Provider;
using System.Net;
using System.Security.Claims;

using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Security;
using Umbraco.Extensions;

namespace MyCustomUmbracoProject.Extensions
{
    public static class MemberAuthenticationExtensions
    {

        public static IUmbracoBuilder ConfigureAuthenticationMembers(this IUmbracoBuilder builder)
        {
            var microsoftTenantId = "f1ae6ecf-dada-4f05-8efb-fab0acf6ef1f";
            builder.Services.ConfigureOptions<AzureB2CMembersExternalLoginProviderOptions>();
            builder.AddMemberExternalLogins(logins =>
            {
                logins.AddMemberLogin(
                    membersAuthenticationBuilder =>
                    {
                        membersAuthenticationBuilder.AddMicrosoftAccount(
                            // The scheme must be set with this method to work for members
                            membersAuthenticationBuilder.SchemeForMembers(AzureB2CMembersExternalLoginProviderOptions.SchemeName),
                            options =>
                            {
                                var config = builder.Config;

                                options.Scope.Add("https://my.visatitans.com/api/vt.read.everything");

                               options.Scope.Add("email");
                                options.Scope.Add("openid");
                               options.Scope.Add("offline_access");

                                // //Callbackpath - Important! The CallbackPath represents the URL to which the browser should be redirected to and the default value is
                                //// /signin-oidc This should be unique!.
                                options.CallbackPath = "/login-callback";
                                ////Obtained from the AZURE AD B2C WEB APP
                              options.ClientId = "1202d0c7-ca3b-41aa-a87d-aa5c90316942";
                                ////Obtained from the AZURE AD B2C WEB APP
                               options.ClientSecret = "6573df4c-1217-40d9-a358-c04590ea3703";

                              // options.Authority = "https://vtciam.b2clogin.com/my.visatitans.com";
                                //options.Authority = "https://login.microsoftonline.com/f1ae6ecf-dada-4f05-8efb-fab0acf6ef1f/v2.0";
                               // options.MetadataAddress = "https://vtciam.b2clogin.com/my.visatitans.com/v2.0/.well-known/openid-configuration?p=B2C_1A_SigninAndSignup";
                               
                                options.TokenEndpoint = $"https://vtciam.b2clogin.com/my.visatitans.com/b2c_1a_signinandsignup/f1ae6ecf-dada-4f05-8efb-fab0acf6ef1f/oauth2/v2.0/token";
                                options.AuthorizationEndpoint = $"https://vtciam.b2clogin.com/my.visatitans.com/b2c_1a_signinandsignup/f1ae6ecf-dada-4f05-8efb-fab0acf6ef1f/oauth2/v2.0/authorize";

                                ////options.TokenEndpoint = $"https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token";
                                ////options.AuthorizationEndpoint = $"https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/authorize"; 
                                options.SaveTokens = true;


                            });
                    });
            });
            return builder;
        }

    }
}
