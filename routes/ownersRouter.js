const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// POST route to create a new owner
router.post("/create", async function (req, res) {
    console.log("inside");
    try {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(500).send("You don't have permission to create a new owner.");
        }

        let { fullname, email, password } = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });

        res.send(createdOwner); // Send the created owner as a response
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// GET route to retrieve all owners
router.get("/create", async (req, res) => {
    try {
        const allOwners = await ownerModel.find();
        res.send(allOwners);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Dummy GET route for testing
router.get("/", function (req, res) {
    res.send("hey it's working");
});

module.exports = router;
