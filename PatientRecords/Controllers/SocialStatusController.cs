using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatientRecords.Data;
using PatientRecords.Models;

namespace PatientRecords.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SocialStatusController : ControllerBase
    {
        private readonly PatientRecordsContext _context;

        public SocialStatusController(PatientRecordsContext context)
        {
            _context = context;
        }

        // GET: api/SocialStatus
        [HttpOptions]
        public async Task<ActionResult<IEnumerable<SocialStatus>>> GetSocialStatus()
        {
            return await _context.SocialStatus.ToListAsync();
        }

        // GET: api/SocialStatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SocialStatus>> GetSocialStatus(int id)
        {
            var socialStatus = await _context.SocialStatus.FindAsync(id);

            if (socialStatus == null)
            {
                return NotFound();
            }

            return socialStatus;
        }

        // PUT: api/SocialStatus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSocialStatus(int id, SocialStatus socialStatus)
        {
            if (id != socialStatus.Id)
            {
                return BadRequest();
            }

            _context.Entry(socialStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SocialStatusExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SocialStatus
        [HttpPost]
        public async Task<ActionResult<SocialStatus>> PostSocialStatus(SocialStatus socialStatus)
        {
            _context.SocialStatus.Add(socialStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSocialStatus", new { id = socialStatus.Id }, socialStatus);
        }

        // DELETE: api/SocialStatus/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SocialStatus>> DeleteSocialStatus(int id)
        {
            var socialStatus = await _context.SocialStatus.FindAsync(id);
            if (socialStatus == null)
            {
                return NotFound();
            }

            _context.SocialStatus.Remove(socialStatus);
            await _context.SaveChangesAsync();

            return socialStatus;
        }

        private bool SocialStatusExists(int id)
        {
            return _context.SocialStatus.Any(e => e.Id == id);
        }
    }
}
