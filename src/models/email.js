// let EmailModel = require("./email");
// let msg = new EmailModel({
//   email: "ada.lovelace@gmail.com",
// });

let mongoose = require("mongoose");
let validator = require("validator");
let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});

module.exports = mongoose.model("Email", emailSchema);

let EmailModel = require("./email");
let msg = new EmailModel({
  email: "ADA.LOVELACE@GMAIL.COM",
});
msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
