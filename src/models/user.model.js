const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const rolesEnum = ["ADMIN", "MERCHANT", "CUSTOMER"]

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name field is required"], 
    unique: true, 
    trim: true, 
    lowercase: true, 
    minLength: 3, 
    maxLength: 30 
  },
  email: { 
    type: String, 
    required: [true, "Email field is required"], 
    unique: true 
  },
  password: { 
    type: String, 
    required: [true, "Password is required"],
    trim: true 
  },
  createdAt: { type: Date, default: Date.now },
  roles:{
    type: String,
    validate: { 
      validator: function (role){ 
        return rolesEnum.includes(role)
      },
      message: (props) => `${props.value} is not a valid role`
    },
    enum: rolesEnum,
    required: [true, "Role field is required"]
  }
});

// Encriptar contraseña antes de guardar
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', userSchema);