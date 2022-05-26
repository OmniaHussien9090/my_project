"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("../index"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Hello API');
});
routes.use('/resize', index_1.default);
routes.use('/', express_1.default.static('/assets'));
