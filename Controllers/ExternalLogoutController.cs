using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common.Filters;
using Umbraco.Cms.Web.Common.Security;
using Umbraco.Cms.Web.Website.Controllers;
using Microsoft.AspNetCore.Authentication;
using Umbraco.Cms.Web.Common.Models;
using SelectPdf;
using System.IO;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using MyCustomUmbracoProject.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Razor;
using Umbraco.Cms.Core;

namespace MyCustomUmbracoProject.Controllers
{
    public class ExternalLogoutController : SurfaceController
    {
        private readonly IMemberSignInManager _signInManager;
        private readonly IPublishedContentQuery _publishedContentQuery;
        public ExternalLogoutController(
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IMemberSignInManager signInManager, IPublishedContentQuery publishedContentQuery)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _signInManager = signInManager;
            _publishedContentQuery = publishedContentQuery;
            //_viewService = viewService;

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateUmbracoFormRouteString]
        public async Task<IActionResult> HandleLogout([Bind(Prefix = "logoutModel")] PostRedirectModel model)
        {
            if (ModelState.IsValid == false)
            {
                return CurrentUmbracoPage();
            }

            var isLoggedIn = HttpContext.User?.Identity?.IsAuthenticated ?? false;

            if (isLoggedIn)
            {
                // Trigger logout on the external login provider.
                await this.HttpContext.SignOutAsync("UmbracoMembers.OpenIdConnect");

                // Trigger logout on this website.
                await _signInManager.SignOutAsync();
            }

            // Don't return RedirectToCurrentUmbracoPage.
            // That will override the location header which is set by the external login provider logout.
            // So by returning EmptyResult() this will still redirect to the external login provider to logout there. 
            return new EmptyResult();
        }


        public static async Task<string> RenderViewToStringAsync(
    string viewName, object model,
    ControllerContext controllerContext,
    bool isPartial = false)
        {
            var actionContext = controllerContext as ActionContext;

            var serviceProvider = controllerContext.HttpContext.RequestServices;
            var razorViewEngine = serviceProvider.GetService(typeof(IRazorViewEngine)) as IRazorViewEngine;
            var tempDataProvider = serviceProvider.GetService(typeof(ITempDataProvider)) as ITempDataProvider;

            using (var sw = new StringWriter())
            {
                var viewResult = razorViewEngine.FindView(actionContext, viewName, !isPartial);

                if (viewResult?.View == null)
                    throw new ArgumentException($"{viewName} does not match any available view");

                var viewDictionary =
                    new ViewDataDictionary(new EmptyModelMetadataProvider(),
                        new ModelStateDictionary())
                    { Model = model };

                var viewContext = new ViewContext(
                    actionContext,
                    viewResult.View,
                    viewDictionary,
                    new TempDataDictionary(actionContext.HttpContext, tempDataProvider),
                    sw,
                    new HtmlHelperOptions()
                );

                await viewResult.View.RenderAsync(viewContext);
                return sw.ToString();
            }
        }




        public async Task<ActionResult> RenderHtmlToPDFAsync(int pid, string pcountry)
        {

            HtmlToPdf htmlToPdf = new HtmlToPdf();
            htmlToPdf.Options.PdfPageOrientation = PdfPageOrientation.Portrait;
            // put css in pdf
            htmlToPdf.Options.MarginLeft = 15;
            htmlToPdf.Options.MarginRight = 15;

            UserVM objUserVM = new UserVM();
            objUserVM.UserID = pid;
            objUserVM.CountryName = pcountry;
            var templatePath = "EmbassyForm";
            // inside of a Controller method
            string confirmation = await RenderViewToStringAsync(templatePath, objUserVM, ControllerContext);

            //var htmlString = await RazorTemplateEngine.RenderAsync("/Views/ExampleView.cshtml", model, viewData);
            string url = "";
            PdfDocument pdfDocument = htmlToPdf.ConvertHtmlString(confirmation);
            byte[] pdf = pdfDocument.Save();
            //convert to memory stream
            Stream stream = new MemoryStream(pdf);
            pdfDocument.Close();
            //if want to transfer stream to file 
           // File(stream, "application/pdf", Guid.NewGuid().ToString() + ".pdf");
        


            return File(stream, "application/pdf", Guid.NewGuid().ToString() + ".pdf");
        }



        public ActionResult RenderAllApplicants(string psearchval)
        {
          var ApplicantData= _publishedContentQuery.Content(1364);
            IList<ApplicantVM> lstApplicantVM = new List<ApplicantVM>();
            if (!string.IsNullOrEmpty(psearchval))
            {
                if (ApplicantData != null)
                {
                    var lstAllsearchApplicants = ApplicantData.Children.Where(x => (x.Name.ToLower().Contains(psearchval.ToLower()))).ToList();
                    if (lstAllsearchApplicants != null && lstAllsearchApplicants.Count > 0)
                    {
                        foreach (var item in lstAllsearchApplicants)
                        {
                            var strDestinationCountry = item.HasProperty("destinationCountry") && item.HasValue("destinationCountry") && item.Value<string>("destinationCountry") != "" ? item.Value<string>("destinationCountry") : string.Empty;
                            lstApplicantVM.Add(new ApplicantVM { ID = item.Id, Name = item.Name, DestinationCountry = strDestinationCountry, Createddate = item.CreateDate.ToString("dd-MM-yyyy HH:mm:ss"), UpdatedDate = item.UpdateDate.ToString("dd-MM-yyyy HH:mm:ss"), URL = item.Url() });
                        }

                    }
                }
            }

            return Json(lstApplicantVM);
        }


    
    }
}
