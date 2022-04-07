const express = require('express');
const studentModel = require('./students-model');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    console.log('received get request!');
    res.json("hello world!");
});

server.get('/api/students', (req, res) => {
    studentModel.findAll()
        .then(students => {
            res.json(students);
        })
        .catch(() => {
            res.status(500).json({ message: "could not get the students!" });
        });
});

server.get('/api/students/:id', (req, res) => {
    let { id } = req.params;
    studentModel.findById(id)
        .then(student => {
            console.log(student);
            if(student == null) {
                res.status(404).json({ message: `student ${id} not found!` });
            } else {
                res.json(student);
            }
        })
        .catch(() => {
            res.status(500).json({ message: `could not get student!` });
        });
})

server.post('/api/students', (req, res) => {
    let body = req.body;
    if(!body.name) {
        res.status(500).json({ message: `name is required` });
    } else {
        studentModel.add_student(body)
            .then(student => {
                res.status(201).json(student);
            })
            .catch(() => {
                res.status(500).json({ message: `could not create student!` });
            });
    }
});

server.put('/api/students/:id', async (req, res) => {
    let { id } = req.params;
    try {
        // let student = await studentModel.findById(id);
        // if(student == null) {
        //     res.status(404).json({ message: `student ${id} not found!` });
        //     return;
        // }

        let body = req.body;
        if(!body.name) {
            res.status(500).json({ message: `name is required` });
            return;
        } else {
            let newStudent = await studentModel.updateStudent(id, body);
            console.log(newStudent);
            if(newStudent == null) {
                res.status(404).json({ message: `student ${id} not found!` });
                return;
            } else {
                res.status(200).json(newStudent);
            }
        }
    } catch(e) {
        res.status(500).json({ message: `could not update student!` });
    }
});

server.delete('/api/students/:id', (req, res) => {
    let { id } = req.params;
    studentModel.deleteStudent(id)
        .then(student => {
            if(student == null) {
                res.status(404).json({ message: `student ${id} not found!` });
                return;
            }

            res.status(200).json(student);
        })
        .catch(() => {
            res.status(500).json({ message: `could not delete student!` });
        });
});

// [DELETE] /api/students/:id (D of CRUD, remove student with :id)

module.exports = server;