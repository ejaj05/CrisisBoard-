const Incident = require("../models/Incident");

// CREATE
exports.createIncident = async (req, res) => {
  try {
    const incident = new Incident(req.body);
    const saved = await incident.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 });
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateIncident = async (req, res) => {
  try {
    const updated = await Incident.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteIncident = async (req, res) => {
  try {
    await Incident.findByIdAndDelete(req.params.id);
    res.json({ message: "Incident deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
