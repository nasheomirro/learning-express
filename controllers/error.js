const errorController = {
  get404
}

export default errorController;

function get404(req, res) {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: req.url });
}