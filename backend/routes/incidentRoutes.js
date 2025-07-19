const express = require('express');
const router = express.Router();
const {
  createIncident,
  getAllIncidents,
  updateIncident,
  deleteIncident
} = require("../controllers/incidentController");

router.post("/", createIncident);
router.get("/", getAllIncidents);
router.put("/:id", updateIncident);
router.delete("/:id", deleteIncident);

module.exports = router;
