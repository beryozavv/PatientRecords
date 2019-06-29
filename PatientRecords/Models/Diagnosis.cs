using System.Collections.Generic;

namespace PatientRecords.Models
{
    public partial class Diagnosis
    {
        public Diagnosis()
        {
            SickLeave = new HashSet<SickLeave>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<SickLeave> SickLeave { get; set; }
    }
}
