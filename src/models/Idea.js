import mongoose from "mongoose";

const IdeaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export const Idea = mongoose.model("Idea", IdeaSchema);




