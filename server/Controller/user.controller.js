const User = require("../Model/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const user = new User({
            name,
            email,
            password,
        });

        await user.save();
        res.sendStatus(200).json({ message: "Data Saved", data: user });
    } catch (error) {
        console.log("Error saving user to database: ", error);
    }

    return res.sendStatus(201).json({ message: User });
};


module.exports = { signup };