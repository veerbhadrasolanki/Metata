using Microsoft.AspNetCore.Mvc;

namespace Metata.Controllers
{
    public class SecurityToolsController : Controller
    {
        public IActionResult SecurePasswordGenerator()
        {
            return View();
        }

        public IActionResult RandomPasswordGenerator()
        {
            return View();
        }

        public IActionResult MD5PasswordGenerator()
        {
            return View();
        }

        public IActionResult SHAPasswordGenerator()
        {
            return View();
        }
    }
}
