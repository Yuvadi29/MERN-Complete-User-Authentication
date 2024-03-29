const User = require("../Model/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try {
        const { name, email } = req.body;

        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const password = req.body.password;
        const saltRounds = 10;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            name,
            email,
            password: encryptedPassword,
        });

        await user.save();
        res.status(200).json({ message: "Data Saved", data: user });
    } catch (error) {
        console.log("Error saving user to database: ", error);
    }

    return res.status(201).json({ message: User });
};


module.exports = { signup };