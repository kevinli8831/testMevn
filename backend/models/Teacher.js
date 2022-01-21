const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String

    },
    phone:{
        type: Number
    },
    sex:{
      type:String
    },
    isAdmin:{
        type:Boolean
    }
},{
    collection:'teachers'
    }
)
module.exports=mongoose.model('Teacher',teacherSchema)
