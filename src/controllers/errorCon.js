export const get404 = (req, res) => {
    res.render("pages/404", {
        pageTitle: "Not Found!",
        styleCSS: "main.css"
    })
};




