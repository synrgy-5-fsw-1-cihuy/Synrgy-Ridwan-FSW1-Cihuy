const { Router } = require("express");
const models = require("../db/models");
const router = Router();
const Role = models.role;

router.get("/", (request, response) => {
  response.status(200).json({ data: result });
});

router.get("/:id", async (request, response) => {
  response.status(200).json({ data: result });
});

router.post("/", (req, res) => {
  res.send("3");
});

router.put("/:id", (req, res) => {
  res.send("4");
});

router.delete("/:id", (req, res) => {
  res.send("5");
});

module.exports = router;
