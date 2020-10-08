"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.post("/users", function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email;
    var user = {
        name: name,
        email: email
    };
    return res.json({ message: "Hello GoStack" });
});
exports.default = routes;
