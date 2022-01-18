import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { engine } from "express-handlebars";
import { userRt } from "./routes/userRt.js";
import { get404 } from "./controllers/errorCon.js";

(async () => {
    // Express and Handlebars Template Engine.
    const app = express();
    app.set("view engine", "hbs");
    app.set("views", path.join(__dirname, "../src/views"));
    app.engine("hbs", engine({
        defaultLayout: "main", extname: ".hbs",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
    }));

    // Middleware, Routes, and Port.
    app.use(express.static(path.join(__dirname, "../src/public")));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use("/users", userRt);
    app.use(get404);

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();





// import methodOverride from "method-override";
// import flash from "connect-flash/lib/flash";
// import sesson from "express-session";
// import mongoose from "mongoose";