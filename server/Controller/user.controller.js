const User = require("../Model/User");

const signup = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        await user.save();
        res.status(200).json({ message: "Data Saved", data: user });
    } catch (error) {
        console.log("Error saving user to database: ", error);
        res.status(401).json({ message: error });
    }

    return res.status(201).json({ message: User });
};


module.exports = { signup };