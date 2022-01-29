const express = require('express');
const studentRoute = express.Router();

// Useful method(CRUD) for  server side -> DataBase
/*Query

Model.find(conditions, [fields], [options], [callback])
Model.findById(id, [fields], [options], [callback])
Model.findOne(conditions, [fields], [options], [callback])

Create

Model.create(conditions,[callback])

Update

Model.update(conditions, update, [options], [callback])
Model.findByIdAndUpdate(id, [update], [options], [callback])
Model.findOneAndUpdate([conditions], [update], [options], [callback])

Remove

Model.remove(conditions, [callback])
Model.findByIdAndRemove(id, [options], [callback])
Model.findOneAndRemove(conditions, [options], [callback])*/

// Student model
let StudentModel = require('../models/Student');

studentRoute.route('/listStudents').get((req, res,next) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

studentRoute.route('/edit-student/:id').get((req, res,next) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update student
studentRoute.route('/update-student/:id').post((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Student successfully updated!')
        }
    })
})

// Delete student
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
    StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentRoute;
