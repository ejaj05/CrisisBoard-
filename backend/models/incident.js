const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  reporter: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  type: {
    type: String,
    enum: ['fire', 'accident', 'medical', 'crime', 'natural_disaster', 'other'],
    required: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  media: [String], // Image/video URLs

  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
      required: true
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true,
      default: [0, 0]
    }
  },

  status: {
    type: String,
    enum: ['reported', 'assigned', 'en_route', 'resolved'],
    default: 'reported'
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }

}, { timestamps: true });

// Enable geospatial index
incidentSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Incident', incidentSchema);
