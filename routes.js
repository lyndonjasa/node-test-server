const express = require('express');
const router = express.Router();

const Student = require('./student.model');

router.get('/students', async(req, res) => {
    try {
        const students = await Student.find({});
        res.send(students);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/students/:id', async(req, res) => {
    const studentId = req.params.id;
    try {
        const students = await Student.findOne({ id: studentId });
        res.send(students);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post('/students', async(req, res) => {
    const student = new Student(req.body);

    try {
        student.save();
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/students/:id', async(req, res) => {
    const studentId = req.params.id;

    try {
        const student = await Student.findOneAndUpdate({ id: studentId }, req.body, { new: true });

        if (!student) {
            res.send(404).send();
        } else {
            res.send(student);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/students/:id', async(req, res) => {
    const studentId = req.params.id;

    try {
        await Student.findOneAndDelete({ id: studentId });
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;