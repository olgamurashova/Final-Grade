const finalGrade = (grade1, grade2, grade3) => {
    const gradeAverage = (grade1 + grade2 + grade3) / 3;
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
      return 'You have entered an invalid grade.'
    }
    if (gradeAverage < 60) {
      return 'F'
    }
    if (gradeAverage < 70) {
      return 'D'
    }
    if (gradeAverage < 80) {
      return 'C'
    }
    if(gradeAverage < 90) {
      return 'B'
    }
    if (gradeAverage < 101) {
      return 'A'
    }
  };
  