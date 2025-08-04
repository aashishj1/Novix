const mongoose = require("mongoose");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.scryptSync(process.env.JOURNAL_ENCRYPTION_KEY || "default_key", "salt", 32);
const iv = Buffer.alloc(16, 0);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decrypt = (encrypted) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

const journalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: {
    type: String,
    required: true,
    set: encrypt,
    get: decrypt,
  },
  createdAt: { type: Date, default: Date.now },
});

journalSchema.set("toJSON", { getters: true });
journalSchema.set("toObject", { getters: true });

module.exports = mongoose.model("Journal", journalSchema);
