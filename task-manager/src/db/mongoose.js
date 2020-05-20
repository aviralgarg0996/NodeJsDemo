const mongoose = require("mongoose");
const connectionUrl = "mongodb://127.0.0.1:27017/task-manager-api";
const validator = require("validator");

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) throw new Error("Age must be a positive number");
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
  },
  password:{
      type:String,
      trim:true,
      minlength:6,
      validate(value) {
        if (validator.contains(value,"pranjal123")) throw new Error("Password is invalid");
      }
  }
});

const Task = mongoose.model("Tasks", {
  description: {
    type: String,
    trim:true,
    required:true
  },
  completed: {
    type: Boolean,
    default:false
  },
});

const task = new Task({
  description: "Here is the sec Task",
});

task
  .save()
  .then((result) => console.log({ task }))
  .catch((error) => console.log({ error }));

// const avi = new User({
//   name: "     Pranjal1    ",
//   email: "    Aviralgarg0996@gmail.com ",
//   password:"password"
// });

// avi
//   .save()
//   .then((result) => console.log({ avi }))
//   .catch((error) => console.log({ error }));
