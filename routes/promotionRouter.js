const express = require("express");
const promotionRouter = express.Router();

promotionRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end("Will send all the promotions to you");
})
.post((req, res) => {
    res.end(`Will add the PROMOTION: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotion");
})
.delete((req, res) => {
    res.end("Deleting all promotion");
});

promotionRouter.route("/:promotionId")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end(`Will send you details on promotion ${req.params.promotionId}.`);
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotion");
})
.delete((req, res) => {
    res.end("Deleting all promotions");
});

module.exports = promotionRouter;
