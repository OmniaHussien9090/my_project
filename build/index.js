"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ImgR_1 = __importDefault(require("./routes/API/ImgR"));
var app = (0, express_1.default)();
var port = process.env.port || 5000;
app.use('/project/API', ImgR_1.default);
app.listen(port, function () {
    console.log("Server start at localhost:".concat(port));
});
exports.default = app;
