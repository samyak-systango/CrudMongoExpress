import { Application } from "express";
import {UserController}  from "../controllers/controllerApi";



export class Routes {
    public Userdata:UserController = new UserController();
    public route(app:Application): void {
        app.route('/users').post(this.Userdata.addNewUser)
        app.route('/users').get(this.Userdata.findAll)
        app.route('/users/:id').get(this.Userdata.findOneUser)
        app.route('/users/:id').put(this.Userdata.updateUser)
        app.route('/users/:id').delete(this.Userdata.deleteUser)
    }
}