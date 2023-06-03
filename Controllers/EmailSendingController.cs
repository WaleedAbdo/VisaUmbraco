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
    public class EmailSendingController : UmbracoApiController
    {
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment Environment;
        private readonly IPublishedContentQuery _publishedContentQuery;
        private readonly IContentService _contentService;

        public EmailSendingController(IPublishedContentQuery publishedContentQuery, Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment, IContentService contentService)
        {
            _publishedContentQuery = publishedContentQuery;
            Environment = _environment;
            _contentService = contentService;
        }


        [HttpPost]
        public string LegalizationSendEmail(IFormCollection formData)
        {
            string wwwPath = this.Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;

            string pathPhoto = Path.Combine(this.Environment.WebRootPath, "data");
            if (!Directory.Exists(pathPhoto))
            {
                Directory.CreateDirectory(pathPhoto);
            }

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


            var strName = formData["Name"];
            var strEmail = formData["Email"];
            var strMobile = formData["Mobile"];
            var strDocumentFrom = formData["DocumentFrom"];
            var strUsedIn = formData["UsedIn"];

            var strSubject = "Legalization";
            var strBody = "";
            strBody += "<p  style=\"font-family:Arial;font-size:12px;\">";
            strBody += "<u><b>Legalization data</b></u>";
            strBody += "<br/><br/>";

            strBody += "<br/><br/>";
            if (!string.IsNullOrEmpty(strName))
            {
                strBody += "<br/>";
                strBody += "Name: " + strName;
            }
            if (!string.IsNullOrEmpty(strEmail))
            {
                strBody += "<br/>";
                strBody += "Email address: " + strEmail;
            }
            if (!string.IsNullOrEmpty(strMobile))
            {
                strBody += "<br/>";
                strBody += "Mobile: " + strMobile;
            }
            if (!string.IsNullOrEmpty(strDocumentFrom))
            {
                strBody += "<br/>";
                strBody += "Document from: " + strDocumentFrom;
            }
            if (!string.IsNullOrEmpty(strUsedIn))
            {
                strBody += "<br/>";
                strBody += "Used In: " + strUsedIn;
            }


            strBody += "<br/><br/><br/>";
            strBody += "</p>";
            string[] filePaths = Directory.GetFiles(Path.Combine(this.Environment.WebRootPath, "data/"));
            foreach (string filePath in filePaths)
            {
                FileInfo info = new FileInfo(filePath);
                info.Delete();
            }

            var UploadedFileNames = new List<string>();

            for (int i = 0; i < formData.Files.Count; i++)
            {
                IFormFile fileNeedToUpload = formData.Files[i];
                string FileUploadName = UploadFile(fileNeedToUpload);

                UploadedFileNames.Add(FileUploadName);
            }


            bool strResult =Configuration.SendEmailV2(RecipientEmailAddress, "", "", strSubject, strBody, strEmail,strName, UploadedFileNames, SMTPSERVER, SMTPPASSWORD, SMTPUSER, SMTPSSL, false, SMTPPORT);
            if (strResult)
            { return "success"; }
            
            return "fail";
        }


        [HttpPost]
        public string TranslationSendEmail(IFormCollection formData)
        {
            string wwwPath = this.Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;

            string pathPhoto = Path.Combine(this.Environment.WebRootPath, "data");
            if (!Directory.Exists(pathPhoto))
            {
                Directory.CreateDirectory(pathPhoto);
            }

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


            var strName = formData["Name"];
            var strEmail = formData["Email"];
            var strMobile = formData["Mobile"];
            var strDocumentlanguage = formData["Documentlanguage"];
            var strTranslationlanguage = formData["Translationlanguage"];

            var strSubject = "Translation";
            var strBody = "";
            strBody += "<p  style=\"font-family:Arial;font-size:12px;\">";
            strBody += "<u><b>Translation data</b></u>";
            strBody += "<br/><br/>";

            strBody += "<br/><br/>";
            if (!string.IsNullOrEmpty(strName))
            {
                strBody += "<br/>";
                strBody += "Name: " + strName;
            }
            if (!string.IsNullOrEmpty(strEmail))
            {
                strBody += "<br/>";
                strBody += "Email address: " + strEmail;
            }
            if (!string.IsNullOrEmpty(strMobile))
            {
                strBody += "<br/>";
                strBody += "Mobile: " + strMobile;
            }
            if (!string.IsNullOrEmpty(strDocumentlanguage))
            {
                strBody += "<br/>";
                strBody += "Document language: " + strDocumentlanguage;
            }
            if (!string.IsNullOrEmpty(strTranslationlanguage))
            {
                strBody += "<br/>";
                strBody += "Translation language: " + strTranslationlanguage;
            }


            strBody += "<br/><br/><br/>";
            strBody += "</p>";
            string[] filePaths = Directory.GetFiles(Path.Combine(this.Environment.WebRootPath, "data/"));
            foreach (string filePath in filePaths)
            {
                FileInfo info = new FileInfo(filePath);
                info.Delete();
            }


            var UploadedFileNames = new List<string>();

            for (int i = 0; i < formData.Files.Count; i++)
            {
                IFormFile fileNeedToUpload = formData.Files[i];
                string FileUploadName = UploadFile(fileNeedToUpload);
                UploadedFileNames.Add(FileUploadName);
            }
          

            bool strResult = Configuration.SendEmailV2(RecipientEmailAddress, "", "", strSubject, strBody, strEmail, strName, UploadedFileNames, SMTPSERVER, SMTPPASSWORD, SMTPUSER, SMTPSSL, false, SMTPPORT);
            if (strResult)
            { return "success"; }

            return "failed";
        }


        [HttpPost]
        public string Addservice(IFormCollection formData)
        {

            var contentService = _contentService;
            var strUserID = formData["UserID"];
            int userid = 0;
            int.TryParse(strUserID,out userid);
            IContent request = null;
            if (userid != null && userid != 0)
            { request = _contentService.GetById(userid);

            var attendees = new List<Dictionary<string, string>>();
            
            var strAddServicesData = formData["paddservicedata"];
            if (strAddServicesData.Count() > 0)
            {
                IList<AddServiceVM> objservices = JsonConvert.DeserializeObject<IList<AddServiceVM>>(strAddServicesData);

                foreach (var item in objservices)
                {
               attendees.Add(new Dictionary<string, string>() {
            {"ncContentTypeAlias","addServices"},
            {"serviceName",item.name},
            {"userName",item.username},

            });

                }

                request.SetValue("servicesItems", JsonConvert.SerializeObject(attendees));
                contentService.SaveAndPublish(request);

            }

            }
            return "1";
        }

        [HttpPost]
        public string SubmitVisaVisaRequirment(IFormCollection formData)
        {

            var contentService = _contentService;
            var strUserID = formData["UserID"];
            int userid = 0;
            int.TryParse(strUserID, out userid);

            IContent request = null;
            if (userid != null && userid != 0)
            { request = _contentService.GetById(userid); }

            var attendees = new List<Dictionary<string, string>>();

            var strvisarequirment = formData["visarequirment"];
            if (strvisarequirment.Count() > 0)
            {
                IList<VisaRequirmentVM> obVisaRequirments = JsonConvert.DeserializeObject<IList<VisaRequirmentVM>>(strvisarequirment);

                foreach (var person in obVisaRequirments)
                {
                    attendees.Add(new Dictionary<string, string>() {
            {"ncContentTypeAlias","visaRequirmentData"},
            {"applicantName", person.ApplicantName},
            {"destinationCountry",person.DestinationCountry},
            {"visaType",person.VisaType.ToString()},
            {"processing",person.Processing.ToString()},
            {"totalFee",person.TotalFees.ToString()}
            });
                }

                request.SetValue("visaRequirementItems", JsonConvert.SerializeObject(attendees));
                contentService.SaveAndPublish(request);
            }

          
            return "1";
        }


        private string UploadFile(IFormFile formFile)
        {
            string UniqueFileName = Guid.NewGuid().ToString() + "-" + formFile.FileName;
            string TargetPath = Path.Combine(Environment.WebRootPath, "data", UniqueFileName);
            using (var stream = new FileStream(TargetPath, FileMode.Create))
            {
                formFile.CopyTo(stream);
            }
            return UniqueFileName;
        }

    }
}
