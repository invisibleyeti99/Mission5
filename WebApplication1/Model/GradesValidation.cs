using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class GradesValidationModel
    {
        [Required]
        [Range(0, 100)]
       
        public int assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public int group { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int final { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
