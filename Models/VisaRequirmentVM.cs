namespace MyCustomUmbracoProject.Models
{

    public class VisaModel
    {
        int _UserID = 0;
        public int UserID { get { return _UserID; } set { _UserID = value; } }
        public List<VisaRequirmentVM> VisaRequirmentVM { get; set; }


    }
    public class VisaRequirmentVM
    {

        string _ApplicantName = "";
        public string ApplicantName { get { return _ApplicantName; } set { _ApplicantName = value; } }

        string _DestinationCountry = "";
        public string DestinationCountry { get { return _DestinationCountry; } set { _DestinationCountry = value; } }

        string _VisaType = "";
        public string VisaType { get { return _VisaType; } set { _VisaType = value; } }

        string _Processing = "";
        public string Processing { get { return _Processing; } set { _Processing = value; } }

        string _TotalFees = "";
        public string TotalFees { get { return _TotalFees; } set { _TotalFees = value; } }
    }
}
