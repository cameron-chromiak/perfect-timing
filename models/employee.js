const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  dayOfWeek: {
    type: Number,
    default: 0
  },
  employeeInfo:[
    {employeeName: String, employeeStart: Number, employeeEnd: Number}
  ]

})

mongoose.model('employee', EmployeeSchema)
