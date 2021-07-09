import * as mongoose from 'mongoose';
import { userData } from '../models/userModel';
import { Request, Response } from 'express';
import {userResStructure,userReqStructure} from "../index/index";

const User = mongoose.model('User', userData);
export class UserController {
    public addNewUser(req: Request, res: Response) {
        const user = new User(req.body);

        user.save().then((data:userResStructure)=>{
            res.json(data).status(200);
        }).catch((err:any)=>{
            res.status(500).send(err);
        })
    }
    public async findAll(req: Request, res: Response) {
        User.find().then((data: userReqStructure) => {
            res.json(data);
        }).catch((err:any)=>{
            res.send(err).status(404);

        })
    }
    public findOneUser(req: Request, res: Response) {
        User.findOne({ email: req.params.id }).then((data: userReqStructure) => {
            res.json(data);
        }).catch((err:any)=>{
            res.send(err).status(404);

        })

    }
    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ email: req.params.id }, req.body, { new: true }).then((data: userReqStructure) => {
            res.json(data);
        }).catch((err:any)=>{
            res.send(err).status(404);

        })


    }
    public deleteUser(req: Request, res: Response){
        User.remove({ email: req.params.id }).then((data: userReqStructure) => {
            res.json(data).status(200)
        }).catch((err:any)=>{
            res.send(err).status(404);
        })
            

    }

}

