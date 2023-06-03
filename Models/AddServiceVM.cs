namespace MyCustomUmbracoProject.Models
{
    public class AddServiceVM
    {
        int _id = 0;
        public int id { get { return _id; } set { _id = value; } }

        string _name = "";
        public string name { get { return _name; } set { _name = value; } }

        string _username = "";
        public string username { get { return _username; } set { _username = value; } }
    }
}
