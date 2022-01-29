const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
}, {
    collection: 'students',
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
})


module.exports = mongoose.model('Student', studentSchema)
