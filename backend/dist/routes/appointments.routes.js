"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var date_fns_1 = require("date-fns");
var appointmentsRouter = express_1.Router();
var appointments = [];
appointmentsRouter.post('/', function (request, response) {
    var _a = request.body, provider = _a.provider, date = _a.date;
    var parsedDate = date_fns_1.startOfHour(date_fns_1.parseISO(date));
    var appointment = {
        id: uuidv4_1.uuid(),
        provider: provider,
        date: parsedDate,
    };
    appointments.push(appointment);
    return response.json(appointment);
});
exports.default = appointmentsRouter;
