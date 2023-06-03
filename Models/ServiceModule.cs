namespace MyCustomUmbracoProject.Models
{
    public class ServiceModule
    {
   
      
        string _Name = "";
        public string name { get { return _Name; } set { _Name = value; } }

        string _Description = "";
        public string description { get { return _Description; } set { _Description = value; } }

        string _ServiceModuleId = "";
        public string serviceModuleId { get { return _ServiceModuleId; } set { _ServiceModuleId = value; } }

        double _ServiceFees = 0;
        public double serviceFees { get { return _ServiceFees; } set { _ServiceFees = value; } }

        
    }
}
