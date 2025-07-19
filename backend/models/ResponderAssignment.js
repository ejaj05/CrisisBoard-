const mongoose = require('mongoose');

const responderAssignmentSchema = new mongoose.Schema({
  responder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  incident: { type: mongoose.Schema.Types.ObjectId, ref: 'Incident', required: true },
  status: {
    type: String,
    enum: ['assigned', 'accepted', 'en_route', 'arrived', 'resolved'],
    default: 'assigned'
  }
}, { timestamps: true });

const ResponserAssignment = mongoose.model('ResponderAssignment', responderAssignmentSchema);
module.exports = {
    ResponserAssignment
}
