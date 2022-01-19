using System;
using System.ComponentModel.DataAnnotations;

namespace StolkLaurenGradeCalculator.Models
{
    public class GradeCalculatorModel
    {
            [Required]
            [Range(0, 100,
            ErrorMessage = "Assignment grade must be between {1} and {2}.")]
            public int assignment { get; set; }

            [Required]
            [Range(0, 100,
            ErrorMessage = "Group Project grade must be between {1} and {2}.")]
            public int groupProject { get; set; }

            [Required]
            [Range(0, 100,
            ErrorMessage = "Quiz grade must be between {1} and {2}.")]
            public int quiz { get; set; }

            [Required]
            [Range(0, 100,
            ErrorMessage = "Exam grade must be between {1} and {2}.")]
            public int exam { get; set; }

            [Required]
            [Range(0, 100,
            ErrorMessage = "INTEX grade must be between {1} and {2}.")]
            public int intex { get; set; }
    }
}
