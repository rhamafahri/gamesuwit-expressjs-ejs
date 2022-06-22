app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const findEmail = users.find((el) => el.email === email, false);
    if (!findEmail) {
        res.status(400).json({ message: "Email not found" });
    } else {
        if (findEmail.password === password) {
            res.status(200).json(findEmail);
        } else {
            res.status(400).json({ message: "Wrong password" });
        }
    }
});