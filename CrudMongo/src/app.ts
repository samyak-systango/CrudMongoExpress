import express,{Application} from "express";
import bodyParser from "body-parser";
import {Routes} from "./routes/routes";
import mongoose from "mongoose";

class App {

    public app: Application = express();
    public routes:Routes = new Routes();
    public mongoUrl: string = "mongodb://127.0.0.1:27017/UserData";
    constructor() {
        this.app;
        this.configuration();
        this.routes.route(this.app);
        this.mongoSetup();
    }

    public configuration(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    public mongoSetup(): void{
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true,useCreateIndex:true});
    }


}

export default new App().app;