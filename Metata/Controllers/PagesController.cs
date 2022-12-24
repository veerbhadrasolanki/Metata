using Metata.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Metata.Controllers
{
    public class PagesController : Controller
    {
        private readonly ILogger<PagesController> _logger;

        public PagesController(ILogger<PagesController> logger)
        {
            _logger = logger;
        }

        public IActionResult ImageToBase64()
        {
            return View();
        }
        public IActionResult Base64ToImage()
        {
            return View();
        }

        public IActionResult WeightConvertor()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}