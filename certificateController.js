const Certificate = require("../models/Certificate");
const User = require("../models/User");

exports.generateCertificate = async (req, res) => {
  const { username, email, eventName } = req.body;
  try {
    const user = await User.findOne({ username, email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const certificate = new Certificate({ username, email, eventName });
    await certificate.save();
    res.json({ message: "Certificate generated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
