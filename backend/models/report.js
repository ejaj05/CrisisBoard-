const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  incidentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Incident' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reportText: { type: String },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  timestamp: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = {
    Report
}