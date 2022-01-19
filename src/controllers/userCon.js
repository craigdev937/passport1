import { User } from "../models/User.js";

export const userCon = (req, res) => {
    res.render("users/reg", {
        pageTitle: "reg",
        styleCSS: "main.css"
    })
};




