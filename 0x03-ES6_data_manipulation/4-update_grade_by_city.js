export default function updateStudentGradeByCity(array, city, newGrades) {
  const updateArray = array.map((student) => {
    const gradeObj = newGrades.find((obj) => obj.studentId === student.id);
    return gradeObj ? { ...student, grade: gradeObj.grade } : { ...student, grade: 'N/A' };
  });

  return updateArray.filter((obj) => obj.location === city);
}
