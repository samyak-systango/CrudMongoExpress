"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes/routes");
var mongoose_1 = __importDefault(require("mongoose"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.routes = new routes_1.Routes();
        this.mongoUrl = "mongodb://127.0.0.1:27017/UserData";
        this.app;
        this.configuration();
        this.routes.route(this.app);
        this.mongoSetup();
    }
    App.prototype.configuration = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true });
    };
    return App;
}());
exports.default = new App().app;
