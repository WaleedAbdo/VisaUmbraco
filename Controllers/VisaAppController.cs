using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Web.Common.Controllers;
using System;
using System.IO;
using Newtonsoft.Json;
using MyCustomUmbracoProject.Models;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Services.Implement;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;
using Umbraco.Extensions;
using Umbraco.Cms.Core.Scoping;
using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;
using System.IO;
using Microsoft.AspNetCore.Hosting;

using System.Text;
using System.ServiceModel.Syndication;
using System.Xml;
using System.Xml.Linq;
using Umbraco.Cms.Core.Models.PublishedContent;
using System.Xml.Serialization;
using Umbraco.Cms.Core.Models;
using MyCustomUmbracoProject.Custom;
using System.Collections;

namespace MyCustomUmbracoProject.Controllers
{
    public class VisaAppController : SurfaceController
    {
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment Environment;
        private readonly IPublishedContentQuery _publishedContentQuery;
        private readonly IContentService _contentService;
        private readonly IScopeProvider _scopeProvider;
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public VisaAppController(
            Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment,
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            IHttpContextAccessor httpContextAccessor,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IPublishedContentQuery publishedContentQuery,
            Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment,
            IContentService contentService, IScopeProvider scopeProvider)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _publishedContentQuery = publishedContentQuery;
            _contentService = contentService;
            _scopeProvider = scopeProvider;
            _hostingEnvironment = hostingEnvironment;
            Environment = _environment;
            _httpContextAccessor = httpContextAccessor;
        }


        public ActionResult SubmitVisaAppDataOfPersonalInformation(PersonalAndHomeDetails objPersonalAndHomeDetails)
        {

            int UserID = 0;
            if (objPersonalAndHomeDetails != null)
            {

                IContent objApplication = null;
                if (objPersonalAndHomeDetails.UserID != null && objPersonalAndHomeDetails.UserID != 0)
                { objApplication = _contentService.GetById(objPersonalAndHomeDetails.UserID); }
                else
                { objApplication = _contentService.CreateAndSave(objPersonalAndHomeDetails.FirstName+" "+ objPersonalAndHomeDetails.MiddleName, 1364, "visaAppDetails", -1); }
                

                UserID = objApplication.Id;
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.FirstName))
                    objApplication.SetValue("firstName", objPersonalAndHomeDetails.FirstName);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.MiddleName))
                    objApplication.SetValue("middleName", objPersonalAndHomeDetails.MiddleName);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.Surname))
                    objApplication.SetValue("surname", objPersonalAndHomeDetails.Surname);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.OtherNames))
                    objApplication.SetValue("otherNames", objPersonalAndHomeDetails.OtherNames);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.Gender))
                    objApplication.SetValue("gender", objPersonalAndHomeDetails.Gender);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.CurrentNationality))
                    objApplication.SetValue("currentNationality", objPersonalAndHomeDetails.CurrentNationality);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.PlaceOfBirth))
                    objApplication.SetValue("placeOfBirth", objPersonalAndHomeDetails.PlaceOfBirth);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.MaritalStatus))
                    objApplication.SetValue("maritalStatus", objPersonalAndHomeDetails.MaritalStatus);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.DateOfBirth))
                    objApplication.SetValue("dateOfBirth", objPersonalAndHomeDetails.DateOfBirth);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.PreviousNationality))
                    objApplication.SetValue("previousNationality", objPersonalAndHomeDetails.PreviousNationality);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.NationalIdentityNumber))
                    objApplication.SetValue("nationalIdentityNumber", objPersonalAndHomeDetails.NationalIdentityNumber);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.MobilePhoneNumber))
                    objApplication.SetValue("mobilePhoneNumber", objPersonalAndHomeDetails.MobilePhoneNumber);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.HighestDegree))
                    objApplication.SetValue("highestDegreeYouHaveCompleted", objPersonalAndHomeDetails.HighestDegree);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.PassportNumber))
                    objApplication.SetValue("passportNumber", objPersonalAndHomeDetails.PassportNumber);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.Passportdate))
                    objApplication.SetValue("passportDate", objPersonalAndHomeDetails.Passportdate);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.Passportexpiredate))
                    objApplication.SetValue("passportExpireDate", objPersonalAndHomeDetails.Passportexpiredate);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.IsApplicantMinor))
                    objApplication.SetValue("isApplicantAMinor", objPersonalAndHomeDetails.IsApplicantMinor);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.InvitedbyFamilyOrFriend))
                    objApplication.SetValue("areYouInvitedByAFamilyOrAFriend", objPersonalAndHomeDetails.InvitedbyFamilyOrFriend);

                //if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.FromDate))
                //    objApplication.SetValue("applicationStatusDetail", objPersonalAndHomeDetails.FromDate);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.InvitedbyCompany))
                    objApplication.SetValue("areYouInvitedByACompany", objPersonalAndHomeDetails.InvitedbyCompany);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.HouseNumber))
                    objApplication.SetValue("flatHouseNumber", objPersonalAndHomeDetails.HouseNumber);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.AreaName))
                    objApplication.SetValue("areaName", objPersonalAndHomeDetails.AreaName);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.Postcode))
                    objApplication.SetValue("zipPostcode", objPersonalAndHomeDetails.Postcode);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.StreetName))
                    objApplication.SetValue("streetNameNumber", objPersonalAndHomeDetails.StreetName);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.City))
                    objApplication.SetValue("city", objPersonalAndHomeDetails.City);
                if (!string.IsNullOrEmpty(objPersonalAndHomeDetails.BuildingName))
                    objApplication.SetValue("buildingNameNumber", objPersonalAndHomeDetails.BuildingName);

                _contentService.SaveAndPublish(objApplication);
            }
            return Json(UserID);
        }


        public ActionResult AddpaymentMethodData(string pPaymentVal, int UserID)
        {
            var contentService = _contentService;
            IContent request = null;
            if (UserID != null && UserID != 0)
            {
                request = _contentService.GetById(UserID);

                if (!string.IsNullOrEmpty(pPaymentVal))
                    { request.SetValue("paymentType", pPaymentVal); }

                contentService.SaveAndPublish(request);
            }
                return Json("1");
        }







        }
}
