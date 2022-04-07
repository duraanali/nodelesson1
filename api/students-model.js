const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

let students = [
  { id: getId(), name: 'Mohamed Ali', school: "University of Mogadishu", grade: "A", age: "20" },
  { id: getId(), name: 'Abdirahman Ahmed', school: "University of Hargeisa", grade: "B", age: "22" },
  { id: getId(), name: 'Fartun Yusuf', school: "University of Kismayo", grade: "A", age: "25" },
]

module.exports = {
  async findAll() {
    // SELECT * FROM students;
    return students
  },

  async findById(id) {
    // SELECT * FROM students WHERE id = 1;
    const student = students.find(s => s.id === id)
    return student
  },

  async add_student({ name, school, grade, age }) {
    // INSERT INTO students (id, name, school, grade, age) VALUES ('xyz', 'Foo', 10);
    const newStudent = { id: getId(), name, school, grade, age }
    students.push(newStudent)
    return newStudent
  },

  async updateStudent(id, changes) {
    // UPDATE students SET name = 'Foo', weight = 9 WHERE id = 1;
    const student = students.find(student => student.id === id)
    if (!student) return null

    const updatedStudent = { ...changes, id }
    students = students.map(s => (s.id === id) ? updatedStudent : s)
    return updatedStudent
  },

  async deleteStudent(id) {
    // DELETE FROM students WHERE id = 1;
    const student = students.find(student => student.id === id)
    if (!student) return null

    students = students.filter(s => s.id !== id)
    return student
  }
}
