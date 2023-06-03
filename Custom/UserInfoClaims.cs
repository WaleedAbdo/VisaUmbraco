using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;

namespace MyCustomUmbracoProject.Custom
{
    public class UserInfoClaims : IClaimsTransformation
    {
        public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
        {
            var id = new ClaimsIdentity();

            string email = principal.FindFirstValue("sub");

            if (!String.IsNullOrEmpty(email))
            {
                id.AddClaim(new Claim(ClaimTypes.Name, email));
                principal.AddIdentity(id);
            }

            return Task.FromResult(principal);
        }
    }
}
