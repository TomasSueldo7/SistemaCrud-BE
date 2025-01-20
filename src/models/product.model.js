const mongoose = require('mongoose');

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"]

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name field is required"], 
    unique: true, 
    trim: true, 
    lowercase: true, 
    minLength: 3, 
    maxLength: 30 
  },

  status: { 
    type: String, 
    validate: { 
      validator: function (status){ 
        return statusEnum.includes(status)
      },
      message: (props) => `${props.value} is not a valid status`
    },
    required: true,
    enum: statusEnum
  },
  
  price: { 
    type: Number, 
    required: true,
    min: [0, "Price cannot be less than 0"], 
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  },

  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  
  description: { type: String },
});

module.exports = mongoose.model('Product', productSchema);