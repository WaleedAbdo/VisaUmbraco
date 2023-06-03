namespace MyCustomUmbracoProject.Models
{
    public class ApplicantVM
    {

        int _ID = 0;
        public int ID { get { return _ID; } set { _ID = value; } }

        string _Name = "";
        public string Name { get { return _Name; } set { _Name = value; } }

        string _DestinationCountry = "";
        public string DestinationCountry { get { return _DestinationCountry; } set { _DestinationCountry = value; } }


        string _Createddate = "";
        public string Createddate { get { return _Createddate; } set { _Createddate = value; } }

        
        string _UpdatedDate = "";
        public string UpdatedDate { get { return _UpdatedDate; } set { _UpdatedDate = value; } }

        string _URL = "";
        public string URL { get { return _URL; } set { _URL = value; } }
    }
}
