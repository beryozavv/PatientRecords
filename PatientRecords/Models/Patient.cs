using System;
using System.Collections.Generic;

namespace PatientRecords.Models
{
    public partial class Patient
    {
        public Patient()
        {
            SickLeave = new HashSet<SickLeave>();
        }

        public int Id { get; set; }
        public string Surname { get; set; }
        public string Name { get; set; }
        public int SocialStatusId { get; set; }
        public string Address { get; set; }
        public string Phones { get; set; }
        public string Comments { get; set; }
        public DateTime? DateOfBirth { get; set; }

        public virtual SocialStatus SocialStatus { get; set; }
        public virtual ICollection<SickLeave> SickLeave { get; set; }
    }
}
