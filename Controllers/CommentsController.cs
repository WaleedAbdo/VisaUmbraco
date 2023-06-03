using Microsoft.AspNetCore.Mvc;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Umbraco.Cms.Core;
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


namespace MyCustomUmbracoProject.Controllers
{
    public class CommentsController : SurfaceController
    {
        private readonly IPublishedContentQuery _publishedContentQuery;
        private readonly IContentService _contentService;
        private readonly IScopeProvider _scopeProvider;
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        public CommentsController(
            Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment,
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IPublishedContentQuery publishedContentQuery,
            IContentService contentService, IScopeProvider scopeProvider)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _publishedContentQuery = publishedContentQuery;
            _contentService = contentService;
            _scopeProvider = scopeProvider;
            _hostingEnvironment = hostingEnvironment;
        }


        public ActionResult SubmitComments(string pName, string pEmail,string pMessage,int pParentID,int pChildID)
        {

            string Name = pName;
            string EmailAddress = pEmail;
            string MessageText = pMessage;

            int PageID = 1297;

            var objApplication = (dynamic)null;
            if (pParentID != 0 && pChildID != 0)
            {
                objApplication = _contentService.CreateAndSave(pName+"-"+ pParentID, pChildID, "replyComments", 0);
            }
            else if (pParentID != 0)
            {
                objApplication = _contentService.CreateAndSave(pName + "-" + pParentID, PageID, "mainComments", 0);
            }

            if (objApplication != null)
            {
                var CurrentPublishedPage = _contentService.GetById(objApplication.Id);
                if (CurrentPublishedPage != null)
                {
                    try
                    {
                        if (pParentID != 0 && pChildID == 0)
                        {
                            var PageNode = _publishedContentQuery.Content(pParentID);
                            CurrentPublishedPage.SetValue("articlePageId", pParentID);
                            CurrentPublishedPage.SetValue("articlePageName", PageNode.Name);
                        }
                       
                        CurrentPublishedPage.SetValue("coName", pName);
                        CurrentPublishedPage.SetValue("email", pEmail);
                        CurrentPublishedPage.SetValue("message", pMessage);
                        CurrentPublishedPage.SetValue("commentDate", DateTime.Now.Date.ToString("dddd, dd MMMM yyyy"));
                      
                        _contentService.SaveAndPublish(CurrentPublishedPage);
                        return Json("1");
                    }
                    catch (Exception ex)
                    {
                        return Json("3");
                    }
                }
            }

            return Json("2");
        }


        }
}
