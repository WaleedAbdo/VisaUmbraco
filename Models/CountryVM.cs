namespace MyCustomUmbracoProject.Models
{

    public class CountryMainVM
    {
        string _Alphabet = "";
        public string Alphabet { get { return _Alphabet; } set { _Alphabet = value; } }

        List<CountryVM> _lstCountryVM = new List<CountryVM>();
        public List<CountryVM> lstCountryVM
        {
            get
            {
                if (_lstCountryVM == null)
                    _lstCountryVM = new List<CountryVM>();

                return _lstCountryVM;
            }

            set
            {
                _lstCountryVM = value;

                if (_lstCountryVM == null)
                    _lstCountryVM = new List<CountryVM>();
            }
        }

    }

    public class CountryVM
    {

        string _Alphabet = "";
        public string Alphabet { get { return _Alphabet; } set { _Alphabet = value; } }

        int _NodeID = 0;
        public int NodeID { get { return _NodeID; } set { _NodeID = value; } }

        string _NodeName = "";
        public string NodeName { get { return _NodeName; } set { _NodeName = value; } }

        string _NodeUrl = "";
        public string NodeUrl { get { return _NodeUrl; } set { _NodeUrl = value; } }

        string _Image = "";
        public string Image { get { return _Image; } set { _Image = value; } }

        string _ImageAlt = "";
        public string ImageAlt { get { return _ImageAlt; } set { _ImageAlt = value; } }

    }


  


}
