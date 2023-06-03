namespace MyCustomUmbracoProject.Models
{
    public class Nationalities
    {
        string _NationalityId = "";
        public string nationalityId { get { return _NationalityId; } set { _NationalityId = value; } }

        string _Name = "";
        public string name { get { return _Name; } set { _Name = value; } }
    }

    public class destinations {

        string _DestinationId = "";
        public string DestinationId { get { return _DestinationId; } set { _DestinationId = value; } }

        string _Name = "";
        public string Name { get { return _Name; } set { _Name = value; } }

        string _CountryCode = "";
        public string CountryCode { get { return _CountryCode; } set { _CountryCode = value; } }

        string _NationalityId = "";
        public string NationalityId { get { return _NationalityId; } set { _NationalityId = value; } }

    }

    public class travelPurposes {

        string _TravelPurposeId = "";
        public string TravelPurposeId { get { return _TravelPurposeId; } set { _TravelPurposeId = value; } }

        string _Name = "";
        public string name { get { return _Name; } set { _Name = value; } }
    }

    public class Origins
    {
        string _OriginId = "";
        public string OriginId { get { return _OriginId; } set { _OriginId = value; } }

        string _CountryCode = "";
        public string CountryCode { get { return _CountryCode; } set { _CountryCode = value; } }
     
        string _NationalityId = "";
        public string nationalityId { get { return _NationalityId; } set { _NationalityId = value; } }

        string _Name = "";
        public string name { get { return _Name; } set { _Name = value; } }

    }

    public class Result
    {
        int _VisaStatus = 0;
        public int VisaStatus { get { return _VisaStatus; } set { _VisaStatus = value; } }

        string _TransactionReferenceNumber = "";
        public string TransactionReferenceNumber { get { return _TransactionReferenceNumber; } set { _TransactionReferenceNumber = value; } }

        public List<Nationalities>? Nationalities { get; set; }
        public List<Origins>? Origins { get; set; }
        public List<Cities>? Cities { get; set; }
        public List<destinations>? destinations { get; set; }
        public List<travelPurposes>? travelPurposes { get; set; }


        List<VisaTypes> _lstVisaTypes = new List<VisaTypes>();
        public List<VisaTypes> VisaTypes
        {
            get
            {
                if (_lstVisaTypes == null)
                    _lstVisaTypes = new List<VisaTypes>();

                return _lstVisaTypes;
            }

            set
            {
                _lstVisaTypes = value;

                if (_lstVisaTypes == null)
                    _lstVisaTypes = new List<VisaTypes>();
            }
        }

        public ServiceModule? serviceModule { get; set; }


        List<VisaValidity> _lstVisaValidity = new List<VisaValidity>();
        public List<VisaValidity> visaValidity
        {
            get
            {
                if (_lstVisaValidity == null)
                    _lstVisaValidity = new List<VisaValidity>();

                return _lstVisaValidity;
            }

            set
            {
                _lstVisaValidity = value;

                if (_lstVisaValidity == null)
                    _lstVisaValidity = new List<VisaValidity>();
            }
        }


        List<ProcessingTimes> _lstProcessingTimes = new List<ProcessingTimes>();
        public List<ProcessingTimes> processingTimes
        {
            get
            {
                if (_lstProcessingTimes == null)
                    _lstProcessingTimes = new List<ProcessingTimes>();

                return _lstProcessingTimes;
            }

            set
            {
                _lstProcessingTimes = value;

                if (_lstProcessingTimes == null)
                    _lstProcessingTimes = new List<ProcessingTimes>();
            }
        }

        //public durationsOfStay? durationsOfStay { get; set; }

        List<durationsOfStay> _lstdurationsOfStay = new List<durationsOfStay>();
        public List<durationsOfStay> durationsOfStay
        {
            get
            {
                if (_lstdurationsOfStay == null)
                    _lstdurationsOfStay = new List<durationsOfStay>();

                return _lstdurationsOfStay;
            }

            set
            {
                _lstdurationsOfStay = value;

                if (_lstdurationsOfStay == null)
                    _lstdurationsOfStay = new List<durationsOfStay>();
            }
        }


        List<ApplicantAges> _lstApplicantAges = new List<ApplicantAges>();
        public List<ApplicantAges> ApplicantAges
        {
            get
            {
                if (_lstApplicantAges == null)
                    _lstApplicantAges = new List<ApplicantAges>();

                return _lstApplicantAges;
            }

            set
            {
                _lstApplicantAges = value;

                if (_lstApplicantAges == null)
                    _lstApplicantAges = new List<ApplicantAges>();
            }
        }

        // public ApplicantAges applicantAges { get; set; }

        List<VisaRequirements> _lstVisaRequirements = new List<VisaRequirements>();
        public List<VisaRequirements> visaRequirements
        {
            get
            {
                if (_lstVisaRequirements == null)
                    _lstVisaRequirements = new List<VisaRequirements>();

                return _lstVisaRequirements;
            }

            set
            {
                _lstVisaRequirements = value;

                if (_lstVisaRequirements == null)
                    _lstVisaRequirements = new List<VisaRequirements>();
            }
        }


    }

    public class Cities {

        string _CityId = "";
        public string CityId { get { return _CityId; } set { _CityId = value; } }

        string _Name = "";
        public string Name { get { return _Name; } set { _Name = value; } }

    }
    public class NationalitiesObject
    {
        string _success = "";
        public string success { get { return _success; } set { _success = value; } }
         public Result? Result { get; set; }
    }



}
