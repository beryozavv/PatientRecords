using System.Collections.Generic;

namespace PatientRecords.Models
{
    public partial class SocialStatus
    {
        public SocialStatus()
        {
            Patient = new HashSet<Patient>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Patient> Patient { get; set; }
    }
}
