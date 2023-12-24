
export default {
  get404
};

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function get404(req, res) {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: req.url });
}