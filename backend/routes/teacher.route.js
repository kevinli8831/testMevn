const express = require('express')
const teacherRoute=express.Router()

let teacherModel= require('../models/Teacher');

teacherRoute.route('/listTeachers').get((req, res,next) => {
    teacherModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

teacherRoute.route('/create-teacher').post((req, res, next) => {
    teacherModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

teacherRoute.route('/edit-teacher/:id').get((req, res,next) => {
    teacherModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update teacher
teacherRoute.route('/update-teacher/:id').post((req, res, next) => {
    teacherModel.findByIdAndUpdate(req.params.id, {
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

// Delete teacher
teacherRoute.route('/delete-teacher/:id').delete((req, res, next) => {
    teacherModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



module.exports = teacherRoute;
