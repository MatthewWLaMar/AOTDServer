const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Merchandise } = require("../models");
const validateSession = require("../middleware/validate-session");
const merchandise = require("../models/merchandise");

const router = Router();

/**** CREATE POST ****/
router.post("/", validateSession, async function (req, res) {
  try {
    const merchEntry = {
      merchTitle: req.body.merchandise.merchTitle,
      image: req.body.merchandise.image,
      description: req.body.merchandise.description,
      price: req.body.merchandise.price,
      hyperlink: req.body.merchandise.hyperlink,
      owner_id: req.user.id,
    };
    Merchandise
      .create(merchEntry)
      .then((merchandise) => res.status(200).json(merchandise));
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** VIEW ALL POSTS ****/

router.get("/", async function (req, res) {
  try {
    Merchandise.findAll().then((merchandise) =>
      res.status(200).json(merchandise)
    );
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** DELETE POST ****/
router.delete("/:id", validateSession, async function (req, res) {
  try {
    const query = { where: { id: req.params.id, owner_id: req.user.id } };

    Merchandise.destroy(query).then(() =>
      res.status(200).json({ message: "Merchandise has been removed" })
    );
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** EDIT YOUR POST ****/
router.put("/update/:id", validateSession, async function (req, res) {
  try {
    const updateMerchandise = {
      merchTitle: req.body.merchandise.merchTitle,
      image: req.body.merchandise.image,
      description: req.body.merchandise.description,
      price: req.body.merchandise.price,
      hyperlink: req.body.merchandise.hyperlink,
      owner_id: req.user.id,
    };
    const query = { where: { id: req.params.id, owner_id: req.user.id } };
    Merchandise.update(updateMerchandise, query).then((merchandise) =>
      res.status(200).json(merchandise)
    );
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
