using System;

namespace PatientRecords.Models
{
    public partial class SickLeave
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int DiagnosisId { get; set; }
        public DateTime? DateOpen { get; set; }
        public DateTime? DateClose { get; set; }
        public DateTime? DateVisit { get; set; }

        public virtual Diagnosis Diagnosis { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
