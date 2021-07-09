"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var controllerApi_1 = require("../controllers/controllerApi");
var Routes = /** @class */ (function () {
    function Routes() {
        this.Userdata = new controllerApi_1.UserController();
    }
    Routes.prototype.route = function (app) {
        app.route('/users').post(this.Userdata.addNewUser);
        app.route('/users').get(this.Userdata.findAll);
        app.route('/users/:id').get(this.Userdata.findOneUser);
        app.route('/users/:id').put(this.Userdata.updateUser);
        app.route('/users/:id').delete(this.Userdata.deleteUser);
    };
    return Routes;
}());
exports.Routes = Routes;
