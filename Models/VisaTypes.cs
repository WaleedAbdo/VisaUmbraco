namespace MyCustomUmbracoProject.Models
{
    public class VisaTypes
    {

        string _VisaTypeId = "";
        public string visaTypeId { get { return _VisaTypeId; } set { _VisaTypeId = value; } }

        string _Name = "";
        public string name { get { return _Name; } set { _Name = value; } }

       // public NumberOfEntries numberOfEntries { get; set; }

        List<NumberOfEntries> _lstNumberOfEntries = new List<NumberOfEntries>();
        public List<NumberOfEntries> NumberOfEntries
        {
            get
            {
                if (_lstNumberOfEntries == null)
                    _lstNumberOfEntries = new List<NumberOfEntries>();

                return _lstNumberOfEntries;
            }

            set
            {
                _lstNumberOfEntries = value;

                if (_lstNumberOfEntries == null)
                    _lstNumberOfEntries = new List<NumberOfEntries>();
            }
        }

    }


    public class NumberOfEntries
    {
        string _NumberOfEntryId = "";
        public string numberOfEntryId { get { return _NumberOfEntryId; } set { _NumberOfEntryId = value; } }

        string _VisTypeId = "";
        public string visTypeId { get { return _VisTypeId; } set { _VisTypeId = value; } }

        string _Name = "";
        public string name { get { return _Name; } set { _Name = value; } }

    }


    public class VisaValidity
    {
        string _Validity = "";
        public string Validity { get { return _Validity; } set { _Validity = value; } }

        string _Word = "";
        public string Word { get { return _Word; } set { _Word = value; } }

        int _Number = 0;
        public int Number { get { return _Number; } set { _Number = value; } }


        List<FormInfos> _lstFormInfos = new List<FormInfos>();
        public List<FormInfos> formInfos
        {
            get
            {
                if (_lstFormInfos == null)
                    _lstFormInfos = new List<FormInfos>();

                return _lstFormInfos;
            }

            set
            {
                _lstFormInfos = value;

                if (_lstFormInfos == null)
                    _lstFormInfos = new List<FormInfos>();
            }
        }


    }

    public class FormInfos
    {
        string _NumberOfEntryId = "";
        public string NumberOfEntryId { get { return _NumberOfEntryId; } set { _NumberOfEntryId = value; } }

        string _ProfileFormVisaTypeId = "";
        public string ProfileFormVisaTypeId { get { return _ProfileFormVisaTypeId; } set { _ProfileFormVisaTypeId = value; } }

        string _VisaProfileProcessingId = "";
        public string VisaProfileProcessingId { get { return _VisaProfileProcessingId; } set { _VisaProfileProcessingId = value; } }

        double _ServiceFees = 0;
        public double ServiceFees { get { return _ServiceFees; } set { _ServiceFees = value; } }

        int _jurisdictionId = 0;
        public int jurisdictionId { get { return _jurisdictionId; } set { _jurisdictionId = value; } }

        string _DurationOfStayId = "";
        public string DurationOfStayId { get { return _DurationOfStayId; } set { _DurationOfStayId = value; } }

        string _VisaProfileCostId = "";
        public string VisaProfileCostId { get { return _VisaProfileCostId; } set { _VisaProfileCostId = value; } }

        string _VisaFormId = "";
        public string VisaFormId { get { return _VisaFormId; } set { _VisaFormId = value; } }

        double _EmbassyFees =0;
        public double EmbassyFees { get { return _EmbassyFees; } set { _EmbassyFees = value; } }

        string _VisaProfileRequirementId = "";
        public string VisaProfileRequirementId { get { return _VisaProfileRequirementId; } set { _VisaProfileRequirementId = value; } }

    }

}
