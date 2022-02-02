let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});
module.exports = mongoose.model("User", userSchema);

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});
userSchema.virtual("fullName").set(function (name) {
  let str = name.split(" ");

  this.firstName = str[0];
  this.lastName = str[1];
});

let model = new UserModel();
model.fullName = "Thomas Anderson";
console.log(model.toJSON()); // Output model fields as JSON
console.log();
console.log(model.fullName); // Output the full name
