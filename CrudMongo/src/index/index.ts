export interface userReqStructure{
    email:string;
    password:string;
    name:string;
    age:number;
    gender:string;
}

export interface userResStructure extends userReqStructure{
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}