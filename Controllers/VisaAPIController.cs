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

namespace MyCustomUmbracoProject.Controllers
{
    public class VisaAPIController : SurfaceController//UmbracoApiController
    {
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment Environment;
        private readonly IPublishedContentQuery _publishedContentQuery;
        private readonly IContentService _contentService;
        private readonly IScopeProvider _scopeProvider;
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public VisaAPIController(
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


        public NationalitiesObject GetAllCountriesByLangID(int plangId)
        {
            NationalitiesObject objNationalitiesObject = null;
            string apiUrl = "https://open-api.visatitans.com";
            HttpClient client = new HttpClient();
            HttpResponseMessage response = client.GetAsync(apiUrl + string.Format("/GetSetupData?lang={0}", plangId)).Result;
            if (response.IsSuccessStatusCode)
            {
                string json = response.Content.ReadAsStringAsync().Result.ToString();
                objNationalitiesObject = JsonConvert.DeserializeObject<NationalitiesObject>(json);
            }

            return objNationalitiesObject;
        }


        public NationalitiesObject GETAllCitiesByRegionID(string plangId, string pRegionId)
        {
            NationalitiesObject objNationalitiesObject = null;
            string apiUrl = "https://open-api.visatitans.com";
            HttpClient client = new HttpClient();
            HttpResponseMessage response = client.GetAsync(apiUrl + string.Format("/OriginDetails?lang={0}&origin={1}", plangId, pRegionId)).Result;
            if (response.IsSuccessStatusCode)
            {
                string json = response.Content.ReadAsStringAsync().Result.ToString();
                objNationalitiesObject = JsonConvert.DeserializeObject<NationalitiesObject>(json);
            }

            return objNationalitiesObject;
        }

        public ActionResult GetVisaRequirments(string plangId, string pRegionId, string pCityId, string pDestinationid, string pNationalityId, string pTravelpurposeId)
        {
            NationalitiesObject objFinalVisaRequirmentsData = new NationalitiesObject();
            string apiUrl = "https://open-api.visatitans.com";
            HttpClient client = new HttpClient();
            DynamicDTO objDynamicDTO = new DynamicDTO();
            System.Text.StringBuilder strHTML = new System.Text.StringBuilder();

            try
            {
                HttpResponseMessage response = client.GetAsync(apiUrl + string.Format("/FindVisaRequirements?lang={0}&originCountry={1}&originCity={2}&destination={3}&nationality={4}&travelPurpose={5}", plangId, pRegionId, pCityId, pDestinationid, pNationalityId, pTravelpurposeId)).Result;
                if (response.IsSuccessStatusCode)
                {
                    string json = response.Content.ReadAsStringAsync().Result.ToString();
                    objFinalVisaRequirmentsData = JsonConvert.DeserializeObject<NationalitiesObject>(json);
                    if (objFinalVisaRequirmentsData.Result != null && (objFinalVisaRequirmentsData.Result.VisaTypes!=null && objFinalVisaRequirmentsData.Result.VisaTypes.Count >0)
                        && (objFinalVisaRequirmentsData.Result.visaValidity != null && objFinalVisaRequirmentsData.Result.visaValidity.Count > 0))
                    {

                        int LangID = 0;
                        int.TryParse(plangId, out LangID);
                        NationalitiesObject GETAllCountriesByLanguageID = GetAllCountriesByLangID(LangID);

                        string NationalityCountryName = "";
                        string DestinationCountryName = "";
                        string LivingCountryName = "", TitlHeading = "";

                        if (GETAllCountriesByLanguageID != null)
                        {

                            var ObjectDestination = GETAllCountriesByLanguageID.Result.destinations.Where(x => x.DestinationId == pDestinationid).SingleOrDefault();
                            if (ObjectDestination != null)
                                DestinationCountryName = ObjectDestination.Name;

                            var objectNationality = GETAllCountriesByLanguageID.Result.Nationalities.Where(x => x.nationalityId == pNationalityId).SingleOrDefault();
                            if (objectNationality != null)
                                NationalityCountryName = objectNationality.name;

                            var objectLiving = GETAllCountriesByLanguageID.Result.Origins.Where(x => x.OriginId == pRegionId).SingleOrDefault();
                            if (objectLiving != null)
                                LivingCountryName = objectLiving.name;

                            if (objFinalVisaRequirmentsData.Result.VisaStatus == 0)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"background-color:#ee3e3e\"\"><p>UNFORTUNATELY, WE CAN'T ASSIST WITH YOUR VISA REQUEST AT THE MOMENT</p></div>"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 1)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"\"><p>UNFORTUNATELY, NOT REQUIRED VISA REQUEST</p></div>"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 2)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"background-color:#709f37\"><p>" + DestinationCountryName + " VISA IS REQUIRED FOR THE CITIZENS OF " + LivingCountryName + " ON ARRIVAL</p></div>"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 3)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"\"><p>" + DestinationCountryName + " VISA IS REQUIRED FOR CITIZENS OF " + LivingCountryName + "</p></div>"; }
                            
                            objDynamicDTO.Titleheading = TitlHeading;
                        }

                        strHTML.Append("<section class=\"feature-categories rec-pro\">");
                        strHTML.Append("<div class=\"services-china\">");

                        if (objFinalVisaRequirmentsData.Result.serviceModule.description != null)
                        {
                            if (objFinalVisaRequirmentsData.Result.serviceModule.description.Contains("</b>"))
                            {

                                System.Text.StringBuilder strserviceModule = new System.Text.StringBuilder();

                                strHTML.Append("<div class=\"sec-title\"><h2> " + objFinalVisaRequirmentsData.Result.serviceModule.name + " </h2 ></div>");
                                strHTML.Append("<div class=\"container\">");
                                strHTML.Append("<div class=\"row text-center row-services row-services-china justify-content-center\">");

                                string[] strvaluesSplit = objFinalVisaRequirmentsData.Result.serviceModule.description.Split("<br>");
                                foreach (var val in strvaluesSplit.Select((value, index) => new { value, index }))
                                {
                                    string StepText = "", TitleText = "";
                                    if (val.value.ToLower().Trim().Contains(":"))
                                    {
                                        string[] strSecondvaluesSplit = val.value.Split(":");
                                        StepText = strSecondvaluesSplit[0].Trim();
                                        TitleText = strSecondvaluesSplit[1].Trim();

                                        strHTML.Append("<div class=\"col-lg-3 col-md-3 col-sm-6 col-6\">");
                                        strHTML.Append("<div class=\"size-service small-category-2\">");
                                        strHTML.Append("<h5 class=\"step text-left\">" + StepText.Replace("<b>", "") + "</h5>");
                                        strHTML.Append("<div class=\"sc-detail text-center\">");
                                        strHTML.Append("<h4 class=\"\"><a href =\"properties-map.html\">");
                                        strHTML.Append("<img src=\"/images/new/china/c1.png\" alt=\"home - 1\">");
                                        strHTML.Append("</a></h4>");
                                        strHTML.Append("<h6>" + TitleText.Replace("<b>", "") + "</h6>");
                                        strHTML.Append("</div>");
                                        strHTML.Append("</div>");
                                        strHTML.Append("</div>");
                                    }


                                }
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                            }

                        }


                        strHTML.Append("<p id=\"title1\" class=\"under-title-visa-china text-center\"></p>");

                        if (objFinalVisaRequirmentsData.Result.VisaTypes != null)
                        {
                            System.Text.StringBuilder strVisaEntries = new System.Text.StringBuilder();
                            strHTML.Append("<div class=\"container\">");
                            strHTML.Append("<div class=\"row row-cols-2 row-cols-lg-5 g-2 g-lg-3 buttons-services text-center justify-content-center\">");

                            strHTML.Append("<div class=\"col col-buttons\">");
                            strHTML.Append("<div class=\"arrow-box one\"><p>VISA TYPES</p></div>");
                            strHTML.Append("<section class=\"arrow-data show-data\">");
                            foreach (var typeitem in objFinalVisaRequirmentsData.Result.VisaTypes)
                            {
                                strHTML.Append("<p rel=\"" + typeitem.name + "\" onclick=\"change_value(this)\" class=\"p_one\">" + typeitem.name + "</p>");

                                if (typeitem.NumberOfEntries != null)
                                {
                                    foreach (var entryitem in typeitem.NumberOfEntries)
                                    {
                                        strVisaEntries.Append("<p rel=\"" + typeitem.name + "\" onclick=\"change_value(this)\" class=\"p_two\">" + entryitem.name + "</p>");
                                    }

                                }
                            }
                            strHTML.Append("</section>");
                            strHTML.Append("</div>");

                            strHTML.Append("<div class=\"col col-buttons\">");
                            strHTML.Append("<div class=\"arrow-box two\"><p>No.of entires</p></div>");
                            strHTML.Append("<section class=\"arrow-data  \">");
                            strHTML.Append(strVisaEntries);

                            strHTML.Append("</section>");
                            strHTML.Append("</div>");


                            if (objFinalVisaRequirmentsData.Result.visaValidity != null)
                            {
                                strHTML.Append("<div class=\"col col-buttons\">");
                                strHTML.Append("<div class=\"arrow-box three\"><p>VALIDITY</p></div>");
                                strHTML.Append("<section class=\"arrow-data  \">");
                                foreach (var validityitem in objFinalVisaRequirmentsData.Result.visaValidity)
                                {

                                    strHTML.Append("<p rel=\"" + validityitem.Number + "\" onclick=\"change_value(this)\" class=\"p_three\">" + validityitem.Validity + "</p>");
                                }

                                strHTML.Append("</section>");
                                strHTML.Append("</div>");

                            }

                            if (objFinalVisaRequirmentsData.Result.processingTimes != null)
                            {
                                strHTML.Append("<div class=\"col col-buttons\">");
                                strHTML.Append("<div class=\"arrow-box four\"><p>PROCESSING TIME</p></div>");
                                strHTML.Append("<section class=\"arrow-data  \">");
                                foreach (var validityitem in objFinalVisaRequirmentsData.Result.processingTimes)
                                {
                                    strHTML.Append("<p rel=\"" + validityitem.Time + "\" onclick=\"change_value(this)\" class=\"p_four\">" + validityitem.Time + " days" + "</p>");
                                }
                                strHTML.Append("</section>");
                                strHTML.Append("</div>");

                            }

                            if (objFinalVisaRequirmentsData.Result.ApplicantAges != null)
                            {
                                strHTML.Append("<div class=\"col col-buttons\">");
                                strHTML.Append("<div class=\"arrow-box five\"><p>APPLICANT AGE</p></div>");
                                strHTML.Append("<section class=\"arrow-data  \">");
                                foreach (var validityitem in objFinalVisaRequirmentsData.Result.ApplicantAges)
                                {

                                    int Age = Convert.ToInt32(validityitem.age);
                                    string agesdata = validityitem.age + " ages";
                                    if (Age > 50)
                                    { agesdata = "All ages"; }

                                    strHTML.Append("<p onclick=\"change_value(this)\" class=\"p_five\">" + agesdata + "</p>");
                                }
                                strHTML.Append("</section>");
                                strHTML.Append("</div>");

                            }

                            strHTML.Append("</div>");

                            if (objFinalVisaRequirmentsData.Result.durationsOfStay != null)
                            {
                                string durationstay = "";
                                foreach (var durationitem in objFinalVisaRequirmentsData.Result.durationsOfStay)
                                {
                                    durationstay = durationitem.duration;
                                }

                                strHTML.Append("<div class=\"row text-center services-duration\">");
                                strHTML.Append("<div class=\"col-12\"><h2 id=\"duration\" rel=\"" + durationstay + "\">DURATION OF STAY " + durationstay + " DAYS</h2></div>");
                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d1.png\" alt=\"home-1\">");
                                strHTML.Append("<p>EMBASSY FEES </p>");
                                strHTML.Append("<h3 id=\"embassyfee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d2.png\" alt=\"home-1\">");
                                strHTML.Append("<p>SERVICE FEES </p>");
                                strHTML.Append("<h3 id=\"servicefee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d3.png\" alt=\"home-1\">");
                                strHTML.Append("<p>VAT </p>");
                                strHTML.Append("<h3 id=\"vatfee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d4.png\" alt=\"home-1\">");
                                strHTML.Append("<p>TOTAL FEES </p>");
                                strHTML.Append("<h3 id=\"totalfee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("</div>");

                            }

                            strHTML.Append("<p id=\"title2\" class=\"under-title-visa-china text-center mt-4\"></p>");
                        }
                        strHTML.Append("</div>");
                        if (objFinalVisaRequirmentsData.Result.visaRequirements != null)
                        {
                            int counter = 1;
                            int NumberCount = 1;
                            strHTML.Append("<div class=\"container-fluid bg-light\">");
                            strHTML.Append("<div class=\"row services-requirments\">");
                            strHTML.Append("<div class=\"col-12\"><h2>" + DestinationCountryName + " VISA REQUIRMENTS FOR CITIZENS OF " + NationalityCountryName + " LIVING IN " + LivingCountryName + "</h2></div>");

                            strHTML.Append("<div class=\"order-services-requirments\">");
                            foreach (var numberitem in objFinalVisaRequirmentsData.Result.visaRequirements)
                            { strHTML.Append("<div class=\"order\"><span>" + NumberCount + "</span></div>"); NumberCount++; }
                            strHTML.Append("</div>");

                            foreach (var reqitem in objFinalVisaRequirmentsData.Result.visaRequirements)
                            {
                                strHTML.Append("<div class=\"col-12 box-services-requirments\">");
                                strHTML.Append("<div class=\"box-data\">");
                                strHTML.Append("<div class=\"row\">");
                                strHTML.Append("<div class=\"col-lg-2 col-xs-2 text-center\">");
                                strHTML.Append("<span>" + counter + "</span>");
                                strHTML.Append("<img src=\"/images/new/china/r1.png\" alt=\"home-1\">");
                                strHTML.Append("</div>");
                                strHTML.Append("<div class=\"col-lg-10 col-xs-10\">");
                                strHTML.Append("<h3>" + reqitem.title + "</h3>");
                                strHTML.Append("<p>" + reqitem.description + "</p>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                                counter++;
                            }
                            
                            strHTML.Append("<div class=\"col-12 under text-center\"><h3><a style=\"display:none\" id=\"applyvisa\" href=\"javascript:;\">APPLY FOR STAMPED VISA</a></h3></div>");
                            strHTML.Append("</div>");
                            strHTML.Append("</div>");

                        }

                        strHTML.Append("</section>");
                        if (strHTML.Length > 0)
                        {
                            objDynamicDTO.StringObjectValues = strHTML.ToString();

                        }
                    }
                    else {

                        int LangID = 0;
                        int.TryParse(plangId, out LangID);
                        NationalitiesObject GETAllCountriesByLanguageID = GetAllCountriesByLangID(LangID);

                        string NationalityCountryName = "";
                        string DestinationCountryName = "";
                        string LivingCountryName = "", TitlHeading = "";

                        if (GETAllCountriesByLanguageID != null)
                        {

                            var ObjectDestination = GETAllCountriesByLanguageID.Result.destinations.Where(x => x.DestinationId == pDestinationid).SingleOrDefault();
                            if (ObjectDestination != null)
                                DestinationCountryName = ObjectDestination.Name;

                            var objectNationality = GETAllCountriesByLanguageID.Result.Nationalities.Where(x => x.nationalityId == pNationalityId).SingleOrDefault();
                            if (objectNationality != null)
                                NationalityCountryName = objectNationality.name;

                            var objectLiving = GETAllCountriesByLanguageID.Result.Origins.Where(x => x.OriginId == pRegionId).SingleOrDefault();
                            if (objectLiving != null)
                                LivingCountryName = objectLiving.name;

                            if (objFinalVisaRequirmentsData.Result.VisaStatus == 0)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"background-color:#ee3e3e\"><p>UNFORTUNATELY, WE CAN'T ASSIST WITH YOUR VISA REQUEST AT THE MOMENT</p></div>"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 1)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"\"><p>UNFORTUNATELY, NOT REQUIRED VISA REQUEST</p></div>"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 2)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"background-color:#709f37\"><p>" + DestinationCountryName + " VISA IS REQUIRED FOR THE CITIZENS OF " + LivingCountryName + " ON ARRIVAL</p></div>"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 3)
                            { TitlHeading = "<div class=\"under-header text-center\" style=\"\"><p>" + DestinationCountryName + " VISA IS REQUIRED FOR CITIZENS OF " + LivingCountryName + "</p></div>"; }

                            objDynamicDTO.Titleheading = TitlHeading;
                        }


                    }
                }
            }
            catch (Exception ex)
            { objFinalVisaRequirmentsData.success = "false"; }
            return Json(objDynamicDTO);
        }


        public ActionResult GetVisaForm3Requirments(string plangId, string pRegionId, string pCityId, string pDestinationid, string pNationalityId, string pTravelpurposeId)
        {
            NationalitiesObject objFinalVisaRequirmentsData = new NationalitiesObject();
            string apiUrl = "https://open-api.visatitans.com";
            HttpClient client = new HttpClient();
            DynamicDTO objDynamicDTO = new DynamicDTO();
            System.Text.StringBuilder strHTML = new System.Text.StringBuilder();

            try
            {
                HttpResponseMessage response = client.GetAsync(apiUrl + string.Format("/FindVisaRequirements?lang={0}&originCountry={1}&originCity={2}&destination={3}&nationality={4}&travelPurpose={5}", plangId, pRegionId, pCityId, pDestinationid, pNationalityId, pTravelpurposeId)).Result;
                if (response.IsSuccessStatusCode)
                {
                    string json = response.Content.ReadAsStringAsync().Result.ToString();
                    objFinalVisaRequirmentsData = JsonConvert.DeserializeObject<NationalitiesObject>(json);
                    if (objFinalVisaRequirmentsData.Result != null && (objFinalVisaRequirmentsData.Result.VisaTypes != null && objFinalVisaRequirmentsData.Result.VisaTypes.Count > 0)
                        && (objFinalVisaRequirmentsData.Result.visaValidity != null && objFinalVisaRequirmentsData.Result.visaValidity.Count > 0))
                    {

                        int LangID = 0;
                        int.TryParse(plangId, out LangID);
                        NationalitiesObject GETAllCountriesByLanguageID = GetAllCountriesByLangID(LangID);

                        string NationalityCountryName = "";
                        string DestinationCountryName = "";
                        string LivingCountryName = "", TitlHeading = "";

                        if (GETAllCountriesByLanguageID != null)
                        {

                            var ObjectDestination = GETAllCountriesByLanguageID.Result.destinations.Where(x => x.DestinationId == pDestinationid).SingleOrDefault();
                            if (ObjectDestination != null)
                                DestinationCountryName = ObjectDestination.Name;

                            var objectNationality = GETAllCountriesByLanguageID.Result.Nationalities.Where(x => x.nationalityId == pNationalityId).SingleOrDefault();
                            if (objectNationality != null)
                                NationalityCountryName = objectNationality.name;

                            var objectLiving = GETAllCountriesByLanguageID.Result.Origins.Where(x => x.OriginId == pRegionId).SingleOrDefault();
                            if (objectLiving != null)
                                LivingCountryName = objectLiving.name;

                            if (objFinalVisaRequirmentsData.Result.VisaStatus == 0)
                            { TitlHeading = "UNFORTUNATELY, WE CAN'T ASSIST WITH YOUR VISA REQUEST AT THE MOMENT"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 1)
                            { TitlHeading = "UNFORTUNATELY, NOT REQUIRED VISA REQUEST"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 2)
                            { TitlHeading =  DestinationCountryName + " VISA IS REQUIRED FOR THE CITIZENS OF " + LivingCountryName + " ON ARRIVAL"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 3)
                            { TitlHeading = DestinationCountryName + " VISA IS REQUIRED FOR CITIZENS OF " + LivingCountryName; }

                            objDynamicDTO.Titleheading = TitlHeading;
                        }

 

                        if (objFinalVisaRequirmentsData.Result.VisaTypes != null)
                        {
                            System.Text.StringBuilder strVisaEntries = new System.Text.StringBuilder();

                            strHTML.Append("<div class=\"row buttons-services text-center\">");

                            strHTML.Append("<div class=\"col col-buttons\">");
                            strHTML.Append("<div class=\"arrow-box one\"><p>VISA TYPES</p></div>");
                            strHTML.Append("<section class=\"arrow-data show-data\">");
                            foreach (var typeitem in objFinalVisaRequirmentsData.Result.VisaTypes)
                            {
                                strHTML.Append("<p onclick=\"change_value(this)\" class=\"p_one\">" + typeitem.name + "</p>");

                                if (typeitem.NumberOfEntries != null)
                                {
                                    foreach (var entryitem in typeitem.NumberOfEntries)
                                    {
                                        strVisaEntries.Append("<p onclick=\"change_value(this)\" class=\"p_two\">" + entryitem.name + "</p>");
                                    }

                                }
                            }
                            strHTML.Append("</section>");
                            strHTML.Append("</div>");

                            strHTML.Append("<div class=\"col col-buttons\">");
                            strHTML.Append("<div class=\"arrow-box two\"><p>No.of entires</p></div>");
                            strHTML.Append("<section class=\"arrow-data  \">");
                            strHTML.Append(strVisaEntries);

                            strHTML.Append("</section>");
                            strHTML.Append("</div>");


                            if (objFinalVisaRequirmentsData.Result.visaValidity != null)
                            {
                                strHTML.Append("<div class=\"col col-buttons\">");
                                strHTML.Append("<div class=\"arrow-box three\"><p>VALIDITY</p></div>");
                                strHTML.Append("<section class=\"arrow-data  \">");
                                foreach (var validityitem in objFinalVisaRequirmentsData.Result.visaValidity)
                                {

                                    strHTML.Append("<p rel=\"" + validityitem.Number + "\" onclick=\"change_value(this)\" class=\"p_three\">" + validityitem.Validity + "</p>");
                                }

                                strHTML.Append("</section>");
                                strHTML.Append("</div>");

                            }

                            if (objFinalVisaRequirmentsData.Result.processingTimes != null)
                            {
                                strHTML.Append("<div class=\"col col-buttons\">");
                                strHTML.Append("<div class=\"arrow-box four\"><p>PROCESSING TIME</p></div>");
                                strHTML.Append("<section class=\"arrow-data  \">");
                                foreach (var validityitem in objFinalVisaRequirmentsData.Result.processingTimes)
                                {
                                    strHTML.Append("<p rel=\"" + validityitem.Time + "\" onclick=\"change_value(this)\" class=\"p_four\">" + validityitem.Time + " days" + "</p>");
                                }
                                strHTML.Append("</section>");
                                strHTML.Append("</div>");

                            }

                            if (objFinalVisaRequirmentsData.Result.ApplicantAges != null)
                            {
                                strHTML.Append("<div class=\"col col-buttons\">");
                                strHTML.Append("<div class=\"arrow-box five\"><p>APPLICANT AGE</p></div>");
                                strHTML.Append("<section class=\"arrow-data  \">");
                                foreach (var validityitem in objFinalVisaRequirmentsData.Result.ApplicantAges)
                                {

                                    int Age = Convert.ToInt32(validityitem.age);
                                    string agesdata = validityitem.age + " ages";
                                    if (Age > 50)
                                    { agesdata = "All ages"; }

                                    strHTML.Append("<p onclick=\"change_value(this)\" class=\"p_five\">" + agesdata + "</p>");
                                }
                                strHTML.Append("</section>");
                                strHTML.Append("</div>");

                            }

                            strHTML.Append("</div>");

                            if (objFinalVisaRequirmentsData.Result.durationsOfStay != null)
                            {
                                string durationstay = "";
                                foreach (var durationitem in objFinalVisaRequirmentsData.Result.durationsOfStay)
                                {
                                    durationstay = durationitem.duration;
                                }

                                strHTML.Append("<div class=\"row text-center services-duration\">");
                                strHTML.Append("<div class=\"col-12\"><h2 id=\"duration\" rel=\"" + durationstay + "\">DURATION OF STAY " + durationstay + " DAYS</h2></div>");
                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d1.png\" alt=\"home-1\">");
                                strHTML.Append("<p>EMBASSY FEES </p>");
                                strHTML.Append("<h3 id=\"embassyfee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d2.png\" alt=\"home-1\">");
                                strHTML.Append("<p>SERVICE FEES </p>");
                                strHTML.Append("<h3 id=\"servicefee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d3.png\" alt=\"home-1\">");
                                strHTML.Append("<p>VAT </p>");
                                strHTML.Append("<h3 id=\"vatfee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("<div class=\"col-lg-3 col-6 duration-box -mobile\">");
                                strHTML.Append("<div class=\"box-services-duration\">");
                                strHTML.Append("<img src=\"/images/new/china/d4.png\" alt=\"home-1\">");
                                strHTML.Append("<p>TOTAL FEES </p>");
                                strHTML.Append("<h3 id=\"totalfee\">NA</h3>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");

                                strHTML.Append("</div>");

                            }

                        }
                     
                        if (objFinalVisaRequirmentsData.Result.visaRequirements != null)
                        {
                            int counter = 1;
                            int NumberCount = 1;
                           
                            strHTML.Append("<div class=\"row services-requirments\">");
                            strHTML.Append("<div class=\"col-12\"><h2>" + DestinationCountryName + " VISA REQUIRMENTS FOR CITIZENS OF " + NationalityCountryName + " LIVING IN " + LivingCountryName + "</h2></div>");

                            strHTML.Append("<div class=\"order-services-requirments\">");
                            foreach (var numberitem in objFinalVisaRequirmentsData.Result.visaRequirements)
                            { strHTML.Append("<div class=\"order\"><span>" + NumberCount + "</span></div>"); NumberCount++; }
                            strHTML.Append("</div>");

                            foreach (var reqitem in objFinalVisaRequirmentsData.Result.visaRequirements)
                            {
                                strHTML.Append("<div class=\"col-12 box-services-requirments\">");
                                strHTML.Append("<div class=\"box-data\">");
                                strHTML.Append("<div class=\"row\">");
                                strHTML.Append("<div class=\"col-lg-2 col-xs-2 text-center\">");
                                strHTML.Append("<span>" + counter + "</span>");
                                strHTML.Append("<img src=\"/images/new/china/r1.png\" alt=\"home-1\">");
                                strHTML.Append("</div>");
                                strHTML.Append("<div class=\"col-lg-10 col-xs-10\">");
                                strHTML.Append("<h3>" + reqitem.title + "</h3>");
                                strHTML.Append("<p>" + reqitem.description + "</p>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                                strHTML.Append("</div>");
                                counter++;
                            }
                            strHTML.Append("</div>");

                        }

                
                        if (strHTML.Length > 0)
                        {
                            objDynamicDTO.StringObjectValues = strHTML.ToString();

                        }
                    }
                    else
                    {


                        int LangID = 0;
                        int.TryParse(plangId, out LangID);
                        NationalitiesObject GETAllCountriesByLanguageID = GetAllCountriesByLangID(LangID);

                        string NationalityCountryName = "";
                        string DestinationCountryName = "";
                        string LivingCountryName = "", TitlHeading = "";

                        if (GETAllCountriesByLanguageID != null)
                        {

                            var ObjectDestination = GETAllCountriesByLanguageID.Result.destinations.Where(x => x.DestinationId == pDestinationid).SingleOrDefault();
                            if (ObjectDestination != null)
                                DestinationCountryName = ObjectDestination.Name;

                            var objectNationality = GETAllCountriesByLanguageID.Result.Nationalities.Where(x => x.nationalityId == pNationalityId).SingleOrDefault();
                            if (objectNationality != null)
                                NationalityCountryName = objectNationality.name;

                            var objectLiving = GETAllCountriesByLanguageID.Result.Origins.Where(x => x.OriginId == pRegionId).SingleOrDefault();
                            if (objectLiving != null)
                                LivingCountryName = objectLiving.name;

                            if (objFinalVisaRequirmentsData.Result.VisaStatus == 0)
                            { TitlHeading = "UNFORTUNATELY, WE CAN'T ASSIST WITH YOUR VISA REQUEST AT THE MOMENT"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 1)
                            { TitlHeading = "UNFORTUNATELY, NOT REQUIRED VISA REQUEST"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 2)
                            { TitlHeading = DestinationCountryName + " VISA IS REQUIRED FOR THE CITIZENS OF " + LivingCountryName + " ON ARRIVAL"; }
                            else if (objFinalVisaRequirmentsData.Result.VisaStatus == 3)
                            { TitlHeading = DestinationCountryName + " VISA IS REQUIRED FOR CITIZENS OF " + LivingCountryName; }

                            objDynamicDTO.Titleheading = TitlHeading;
                        }


                    }
                }
            }
            catch (Exception ex)
            { objFinalVisaRequirmentsData.success = "false"; }
            return Json(objDynamicDTO);
        }


        public ActionResult GetFeesByValidityandProcessingID(string plangId, string pRegionId, string pCityId, string pDestinationid, string pNationalityId, string pTravelpurposeId, int pValidatityVal, string pProcessingID,string pDurationstay)
        {
            NationalitiesObject objFinalVisaRequirmentsData = GetVisaRequirmentObject(plangId, pRegionId, pCityId, pDestinationid, pNationalityId, pTravelpurposeId);

         

        

            ServiceVM objServiceVM = new ServiceVM();
            if (objFinalVisaRequirmentsData != null)
            {

                if (pValidatityVal != null && pProcessingID != null)
                {
                    var objProfileFormVisaTypeId = objFinalVisaRequirmentsData.Result.visaValidity.Where(x => x.Number == pValidatityVal).FirstOrDefault();
                    var ProfileFormVisaTypeId = "";
                    if (objProfileFormVisaTypeId != null)
                    {
                        ProfileFormVisaTypeId= objProfileFormVisaTypeId.formInfos.Select(y => y.ProfileFormVisaTypeId).FirstOrDefault();

                        //Procesing Data
                        var objProcessingObject = objFinalVisaRequirmentsData.Result.processingTimes.Where(x => x.Time == pProcessingID).FirstOrDefault();
                        if (objProcessingObject != null)
                        {
                            var GetProcessingFormInfoData = objProcessingObject.formInfos.Where(x=>(x.ProfileFormVisaTypeId!=null && x.ProfileFormVisaTypeId== ProfileFormVisaTypeId)).SingleOrDefault();
                            if (GetProcessingFormInfoData != null)
                                objServiceVM.ServiceFees = Math.Round(GetProcessingFormInfoData.ServiceFees,2);

                            //DurationtoStay Data
                            var objDurationtoStayObject = objFinalVisaRequirmentsData.Result.durationsOfStay.Where(x => x.duration == pDurationstay).FirstOrDefault();
                            if (objDurationtoStayObject != null)
                            {
                                var GetDurationtoStayFormInfoData = objDurationtoStayObject.formInfos.Where(x => (GetProcessingFormInfoData !=null && x.VisaProfileProcessingId== GetProcessingFormInfoData.VisaProfileProcessingId)).SingleOrDefault();

                                //Application Ages
                                FormInfos objFormInfos = new FormInfos();
                                foreach (var item in objFinalVisaRequirmentsData.Result.ApplicantAges)
                                {
                                    var AgesFormInfoObject = item.formInfos.Where(x => (GetDurationtoStayFormInfoData!=null && x.DurationOfStayId == GetDurationtoStayFormInfoData.DurationOfStayId)).SingleOrDefault();
                                    if (AgesFormInfoObject != null)
                                    {
                                        objFormInfos.DurationOfStayId = AgesFormInfoObject.DurationOfStayId;
                                        objFormInfos.EmbassyFees = AgesFormInfoObject.EmbassyFees;
                                        objFormInfos.VisaFormId = AgesFormInfoObject.VisaFormId;
                                        objFormInfos.VisaProfileCostId = AgesFormInfoObject.VisaProfileCostId;
                                    }
                                }

                                if (objFormInfos != null)
                                {
                                    objServiceVM.EmbassyFees = Math.Round(objFormInfos.EmbassyFees,2);
                                }
                                if (objServiceVM.ServiceFees != null)
                                {
                                    double VATFee = 0;
                                     VATFee = (double)Math.Round(((double)14 / 100) * (double)objServiceVM.ServiceFees, 2);
                                    objServiceVM.VATFees = VATFee;
                                }
                                if (objServiceVM.ServiceFees != null && objServiceVM.VATFees!=null)
                                {
                                    objServiceVM.TotalFees =Math.Round(objServiceVM.ServiceFees + objServiceVM.VATFees,2);
                                }

                                }

                        }


                    }

                }
            
            }
            return Json(objServiceVM);
        }
        public DTO GetCountryNodeURL(int pCountryID)
        {
            DTO objDTO = new DTO();
            string NodeUrl = "";
            if (pCountryID != null && pCountryID != 0)
            {
                var NodeData = _publishedContentQuery.Content(pCountryID);

                if (NodeData != null)
                {
                    NodeUrl = NodeData.Url();
                    objDTO.NodeURL = NodeUrl;
                }

            }

            return objDTO;
            // return Ok(NodeUrl);
        }

        public NationalitiesObject GetVisaRequirmentObject(string plangId, string pRegionId, string pCityId, string pDestinationid, string pNationalityId, string pTravelpurposeId)
        {
            NationalitiesObject objFinalVisaRequirmentsData = new NationalitiesObject();
            string apiUrl = "https://open-api.visatitans.com";
            HttpClient client = new HttpClient();
            DynamicDTO objDynamicDTO = new DynamicDTO();
            System.Text.StringBuilder strHTML = new System.Text.StringBuilder();
            try
            {
                HttpResponseMessage response = client.GetAsync(apiUrl + string.Format("/FindVisaRequirements?lang={0}&originCountry={1}&originCity={2}&destination={3}&nationality={4}&travelPurpose={5}", plangId, pRegionId, pCityId, pDestinationid, pNationalityId, pTravelpurposeId)).Result;
                if (response.IsSuccessStatusCode)
                {
                    string json = response.Content.ReadAsStringAsync().Result.ToString();
                    objFinalVisaRequirmentsData = JsonConvert.DeserializeObject<NationalitiesObject>(json);
                }

            }
            catch (Exception ex) { }

            return objFinalVisaRequirmentsData;
        }

        public DTO GetCountryNodeByName(string pNationalityName)
        {
            DTO objDTO = new DTO();
            string NodeUrl = "";
            if (pNationalityName != null)
            {
                var LandingPageData = _publishedContentQuery.Content(1189);//LandingMainPageContent
                if (LandingPageData != null)
                {
                    var baseUrl = $"{_httpContextAccessor.HttpContext?.Request.Scheme}://{_httpContextAccessor.HttpContext?.Request.Host}";//;

                    IPublishedContent GetNodedataIDByName = LandingPageData.Children.Where(x => x.Name != null && pNationalityName != null && x.Name.Trim().ToLower().Contains(pNationalityName.Trim().ToLower())).FirstOrDefault();
                    if (GetNodedataIDByName != null)
                    {
                        objDTO.NodeURL = baseUrl + GetNodedataIDByName.Url();
                        objDTO.NodeId = GetNodedataIDByName.Id;
                    }
                    else
                    { objDTO.NodeURL = baseUrl; }

                }

            }

            return objDTO;
            // return Ok(NodeUrl);
        }


        public ActionResult SaudiWorkVisaSendEmail(string pNationality, string pLivingIn,string pDegreeFrom)
        {

            string SMTPSERVER = "mail.crswan.com";
            string SMTPUSER = "smtp@crswan.com";
            string SMTPPASSWORD = "$smtp@1234$";
            bool SMTPSSL = false;
            string SMTPPORT = "587";


            string RecipientEmailAddress = "";
            var HomeNode = _publishedContentQuery.Content(1163);
            if (HomeNode != null)
            {
                if (HomeNode.HasValue("recipientEmail"))
                    RecipientEmailAddress = HomeNode.Value<string>("recipientEmail");

                if (HomeNode.HasValue("sMTPSERVER"))
                    SMTPSERVER = HomeNode.Value<string>("sMTPSERVER");
                if (HomeNode.HasValue("sMTPUSER"))
                    SMTPUSER = HomeNode.Value<string>("sMTPUSER");
                if (HomeNode.HasValue("sMTPPASSWORD"))
                    SMTPPASSWORD = HomeNode.Value<string>("sMTPPASSWORD");
                if (HomeNode.HasValue("sMTPSSL"))
                    SMTPSSL = HomeNode.Value<bool>("sMTPSSL");
                if (HomeNode.HasValue("sMTPPORT"))
                    SMTPPORT = HomeNode.Value<string>("sMTPPORT");

                if (HomeNode.HasValue("recipientEmail"))
                    RecipientEmailAddress = HomeNode.Value<string>("recipientEmail");
            }


            var strNationality = pNationality;
            var strpLivingIn = pLivingIn;
            var strpDegreeFrom = pDegreeFrom;
            var SenderName = "SaudiWorkVisa";

            var strSubject = "Saudi Work Visa";
            var strBody = "";
            strBody += "<p  style=\"font-family:Arial;font-size:12px;\">";
            strBody += "<u><b>Saudi Work Visa data</b></u>";
            strBody += "<br/><br/>";

            strBody += "<br/><br/>";
            if (!string.IsNullOrEmpty(strNationality))
            {
                strBody += "<br/>";
                strBody += "Nationality: " + strNationality;
            }
            if (!string.IsNullOrEmpty(strpLivingIn))
            {
                strBody += "<br/>";
                strBody += "LivingIn: " + strpLivingIn;
            }
            if (!string.IsNullOrEmpty(strpDegreeFrom))
            {
                strBody += "<br/>";
                strBody += "DegreeFrom: " + strpDegreeFrom;
            }
  
            strBody += "<br/><br/><br/>";
            strBody += "</p>";


            bool strResult = Configuration.SendEmailV2(RecipientEmailAddress, "", "", strSubject, strBody, "waris@matrix-slutions.net", SenderName, null, SMTPSERVER, SMTPPASSWORD, SMTPUSER, SMTPSSL, false, SMTPPORT);
            if (strResult)
            { return Json("1"); }
            return Json("2");
        }

        //pName: Name,pEmail:Email,pMobile:Mobile,pNationality:Nationality,pLivingIn:LivingIn,pLettervalidity:Lettervalidity
        public ActionResult SaudiInvitationLatterSendEmail(string pName, string pEmail, string pMobile, string pNationality, string pLivingIn,string pLettervalidity)
        {
            string SMTPSERVER = "mail.crswan.com";
            string SMTPUSER = "smtp@crswan.com";
            string SMTPPASSWORD = "$smtp@1234$";
            bool SMTPSSL = false;
            string SMTPPORT = "587";

            var Name = pName;
            var EmailAddress = pEmail;
            var Mobile = pMobile;
            var strNationality = pNationality;
            var strpLivingIn = pLivingIn;
            var strpLettervalidity = pLettervalidity;
            var SenderName = Name;

        
            string RecipientEmailAddress = "";
           var HomeNode= _publishedContentQuery.Content(1163);
            if (HomeNode != null)
            {
                if (HomeNode.HasValue("recipientEmail"))
               RecipientEmailAddress = HomeNode.Value<string>("recipientEmail");
            }

            var strSubject = "Saudi Invitaion Letter";
            var strBody = "";
            strBody += "<p  style=\"font-family:Arial;font-size:12px;\">";
            strBody += "<u><b>Saudi Invitaion Letter data</b></u>";
            strBody += "<br/><br/>";

            strBody += "<br/><br/>";
            if (!string.IsNullOrEmpty(Name))
            {
                strBody += "<br/>";
                strBody += "Name: " + Name;
            }
            if (!string.IsNullOrEmpty(EmailAddress))
            {
                strBody += "<br/>";
                strBody += "EmailAddress: " + EmailAddress;
            }
            if (!string.IsNullOrEmpty(Mobile))
            {
                strBody += "<br/>";
                strBody += "Mobile: " + Mobile;
            }
            if (!string.IsNullOrEmpty(strNationality))
            {
                strBody += "<br/>";
                strBody += "Nationality: " + strNationality;
            }
            if (!string.IsNullOrEmpty(strpLivingIn))
            {
                strBody += "<br/>";
                strBody += "LivingIN: " + strpLivingIn;
            }
            if (!string.IsNullOrEmpty(strpLettervalidity))
            {
                strBody += "<br/>";
                strBody += "Lettervalidity: " + strpLettervalidity;
            }

            strBody += "<br/><br/><br/>";
            strBody += "</p>";


            bool strResult = Configuration.SendEmailV2(RecipientEmailAddress, "", "", strSubject, strBody, EmailAddress, SenderName, null, SMTPSERVER, SMTPPASSWORD, SMTPUSER, SMTPSSL, false, SMTPPORT);
            if (strResult)
            { return Json("1"); }

            return Json("");
        }



    }
}
