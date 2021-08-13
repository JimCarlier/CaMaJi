module.exports = app => {
    const profile = require("../controllers/profile.controller.js");
    let router = require("express").Router();
    //Create a profile
    router.post("/create/:userId", profile.createProfile);
    router.get('/:id', profile.findOne)
    router.put("/:id", profile.updateProfile);

    app.use('/api/profile', router)
}