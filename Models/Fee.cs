namespace MyCustomUmbracoProject.Models
{
    public class Fee
    {
        int _ServiceFees = 0;
        public int ServiceFees { get { return _ServiceFees; } set { _ServiceFees = value; } }

        int _EmbassyFees = 0;
        public int EmbassyFees { get { return _EmbassyFees; } set { _EmbassyFees = value; } }
    }
}
