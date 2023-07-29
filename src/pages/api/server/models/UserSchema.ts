import mongoose from "mongoose";

const socialMediaLinkSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: String,
  url: { type: String, required: true }
});

const linkPageSchema = new mongoose.Schema({
  pageid: String,
  name: String,
  avatarImg: String,
  description: String,
  backgroundImg: String,
  links: [socialMediaLinkSchema]
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  linkPages: [linkPageSchema]
});

export default mongoose.models['User'] || mongoose.model('User', userSchema);