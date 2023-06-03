namespace MyCustomUmbracoProject.Models
{
    public class ServiceVM
    {
        double _EmbassyFees = 0;
        public double EmbassyFees { get { return _EmbassyFees; } set { _EmbassyFees = value; } }

        double _ServiceFees = 0;
        public double ServiceFees { get { return _ServiceFees; } set { _ServiceFees = value; } }

        double _VATFees = 0;
        public double VATFees { get { return _VATFees; } set { _VATFees = value; } }

        double _TotalFees = 0;
        public double TotalFees { get { return _TotalFees; } set { _TotalFees = value; } }
    }
}
