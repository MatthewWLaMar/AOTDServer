const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Merchandise } = require("../models");
const validateSession = require("../middleware/validate-session");
const merchandise = require("../models/merchandise");

const router = Router();



module.exports = router