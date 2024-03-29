const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = "HelloWorld";

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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: "User not Found, Kindly Signup" });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Email / Password" });
        }

        const token = jwt.sign({
            id: existingUser.id
        }, jwtSecret, {
            expiresIn: "1hr",
        });

        return res.status(200).json({ message: "User Logged in Successfully", user: existingUser, token });


    } catch (error) {
        console.log("Error Logging in: ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { signup, login };
