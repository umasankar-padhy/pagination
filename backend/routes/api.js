
const express = require("express");
const { getApiData } = require("../controllers/getApiData");

const router = express.Router();

// Define routes for user authentication and authorization

router.get("/getApiData", getApiData);



module.exports = router;
