function findToppers(students) {
  const toppers = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 70) {
      toppers.push(students[i].name);
    }
  }

  return toppers;
}

const students = [
  { name: "Anu", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Meera", marks: 91 },
  { name: "Vikram", marks: 72 },
];

const toppers = findToppers(students);

console.log(toppers);
