namespace MyCustomUmbracoProject.Models
{
    public class ProcessingTimes
    {
        string _Time = "";
        public string Time { get { return _Time; } set { _Time = value; } }

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
        //public List<FormInfos>? FormInfos { get; set; }
    }


    public class durationsOfStay
    {
        string _duration = "";
        public string duration { get { return _duration; } set { _duration = value; } }
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
       // public List<FormInfos>? FormInfos { get; set; }

    }

    public class ApplicantAges
    {
        string _Age = "";
        public string age { get { return _Age; } set { _Age = value; } }

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

        //public List<FormInfos>? FormInfos { get; set; }
    }


    public class VisaRequirements
    {
        string _Title = "";
        public string title { get { return _Title; } set { _Title = value; } }

        string _Description = "";
        public string description { get { return _Description; } set { _Description = value; } }


        //List<Lines> _lstLines = new List<Lines>();
        //public List<Lines>? Lines
        //{
        //    get
        //    {
        //        if (_lstLines == null)
        //            _lstLines = new List<Lines>();

        //        return _lstLines;
        //    }

        //    set
        //    {
        //        _lstLines = value;

        //        if (_lstLines == null)
        //            _lstLines = new List<Lines>();
        //    }
        //}


        //public Lines lines { get; set; } = null;

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

        //public List<FormInfos>? FormInfos { get; set; }
    }

    public class Lines
    {

    }

}
