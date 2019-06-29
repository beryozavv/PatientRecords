using Microsoft.EntityFrameworkCore;
using PatientRecords.Models;

namespace PatientRecords.Data
{
    public partial class PatientRecordsContext : DbContext
    {
        public PatientRecordsContext()
        {
        }

        public PatientRecordsContext(DbContextOptions<PatientRecordsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Diagnosis> Diagnosis { get; set; }
        public virtual DbSet<Patient> Patient { get; set; }
        public virtual DbSet<SickLeave> SickLeave { get; set; }
        public virtual DbSet<SocialStatus> SocialStatus { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Diagnosis>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("\"Diagnosis\"_\"Name\"_uindex")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.Id).HasDefaultValueSql("nextval('\"Patients_Id_seq\"'::regclass)");

                entity.Property(e => e.Address).HasMaxLength(200);

                entity.Property(e => e.Comments).HasMaxLength(300);

                entity.Property(e => e.Name).HasMaxLength(100);

                entity.Property(e => e.Phones).HasMaxLength(60);

                entity.Property(e => e.Surname)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.SocialStatus)
                    .WithMany(p => p.Patient)
                    .HasForeignKey(d => d.SocialStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("patients_socialstatuses_id_fk");
            });

            modelBuilder.Entity<SickLeave>(entity =>
            {
                entity.HasIndex(e => new { e.PatientId, e.DateOpen })
                    .HasName("sickleave_patientid_dateopen_uindex")
                    .IsUnique();

                entity.HasOne(d => d.Diagnosis)
                    .WithMany(p => p.SickLeave)
                    .HasForeignKey(d => d.DiagnosisId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sickleave_diagnosis_id_fk");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.SickLeave)
                    .HasForeignKey(d => d.PatientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sickleave_patient_id_fk");
            });

            modelBuilder.Entity<SocialStatus>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("socialstatus_name_uindex")
                    .IsUnique();

                entity.Property(e => e.Id).HasDefaultValueSql("nextval('\"SocialStatuses_Id_seq\"'::regclass)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(70);
            });

            modelBuilder.HasSequence<int>("Patients_Id_seq");

            modelBuilder.HasSequence<int>("SocialStatuses_Id_seq");
        }
    }
}
