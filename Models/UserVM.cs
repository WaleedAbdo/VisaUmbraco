namespace MyCustomUmbracoProject.Models
{
    public class UserVM
    {
        string _CountryName = "";
        public string CountryName { get { return _CountryName; } set { _CountryName = value; } }

        int _UserID = 0;
        public int UserID { get { return _UserID; } set { _UserID = value; } }
    }
}
