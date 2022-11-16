const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("1");
});

router.get("/:id", (req, res) => {
  res.send("2");
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
