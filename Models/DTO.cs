namespace MyCustomUmbracoProject.Models
{
    public class DTO
    {
        string _NodeURL = "";
        public string NodeURL { get { return _NodeURL; } set { _NodeURL = value; } }

        int _NodeId = 0;
        public int NodeId { get { return _NodeId; } set { _NodeId = value; } }
    }

    public class DynamicDTO
    {

        string _StringObjectValues = "";
        public string StringObjectValues { get { return _StringObjectValues; } set { _StringObjectValues = value; } }


        string _Titleheading = "";
        public string Titleheading { get { return _Titleheading; } set { _Titleheading = value; } }
    }
}
