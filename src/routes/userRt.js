import express from "express";
import { userCon } from "../controllers/userCon.js";

export const userRt = express.Router();
    userRt.get("/register", userCon);




