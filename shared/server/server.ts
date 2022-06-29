import express from "express"
import 'dotenv/config'
import mongoose from "mongoose"
import  { Response, Request, NextFunction } from "express"
import 'dotenv/config'
import jwt  from "jsonwebtoken"
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";
import {SIH_MODEL, image,input_fieds_schema_model} from "../Schema/hackathone"
import bcrypt from "bcrypt";
import multer from "multer"
import fs from "fs"
import {Buffer} from "buffer"
console.log(process.env.DB_URI as string)
var original_filename:string;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
   
  }
})
var upload = multer({ storage: storage })
const app = express()
// app.use(express.static("./uploads"))
// const Routes = app.route();
try{
   (async ()=> { await mongoose.connect(process.env.DB_URI as string);

})();
} catch (err) {

}
app.use(cors({ origin: "http://localhost:19000",credentials:true,allowedHeaders:['Content-Type', 'Authorization'] }));
app.use(express.json());
const Hash_password = async (Plain_Password:string)=>{
  const Hashed_password = await bcrypt.hash(Plain_Password, 10)
  return Hashed_password;
}
const findExistuser = async ({Username}:any) => {
  const isUser = await SIH_MODEL.findOne({Username : Username});
  console.log(isUser)
  if(isUser)
 return isUser;
 else
 return null
};
const findExistuser_image = async ({Username}:any) => {
  const isUser = await image.findOne({Username : Username});
  console.log(isUser)
  if(isUser)
 return isUser;
 else
 return null
};
const tokenGenrator =  (cred: any) => {
  // console.log(param);
  let Token =  jwt.sign(
    { Uesername: cred as string },
    process.env.Token_SECRET as string,
    { expiresIn: `${process.env.refreshTokenexpire as string}d`}
  );
  let refreshToken =  jwt.sign(
    { Username: cred as string },
    process.env.rerfreshToken_SECRET as string,
    { expiresIn: `${process.env.refreshTokenexpire as string}d` }

    )
    return {Token: Token, Refresh_Token: refreshToken}
};
const Delete_from_DB = async(param:object)=>{ 
await SIH_MODEL.deleteMany(param)
}
const Insert_image_into_DB  = async(param:any)=>{
await new image(param).save()
}
const Insert_into_DB = async (param:object|any)=>{
  Object.assign(param, {Password: await Hash_password(param.Password) })
  Object.assign(param, {Device_ID: uuidv4() })
  const {Token, Refresh_Token} =   tokenGenrator(param)
    Object.assign(param, {Token: Token, Refresh_Token: Refresh_Token})
     const save_user = new SIH_MODEL(param).save(async (err:any, model:any)=>{
    if(!err)
  return  await model
  else
  return "Error detected"
  });
return param
}
const insert_image_into_db = (param:any)=>{
  const save_user = new image(param).save()
}
app.post("/sign_in",   async (req:Request, res:Response,next:NextFunction)=>{
 if(await  findExistuser(req.body) === undefined)
res.send(await Insert_into_DB(req.body))
else 
res.send({"Status" : "User is Already There"})

})
app.post('/login',async(req,res)=>{
  const user:any = await  findExistuser(req.body)

if(user)
await bcrypt.compare(req.body.Password, user.Password).then((result:boolean)=>result ? res.send(user) : res.send({"Status":"Password Incorrect"}));
else
res.json({"Status":"Username does not Exist"})
})
app.post('/image/username', async (req,res)=>{
  await Insert_image_into_DB(req.body)
  res.send()
})
app.post("/image",  upload.single('demo_image'), async (req,res)=>{

console.log(JSON.stringify(req.body))
// res.send({"status": "ok"})
  if( req.file){
{
   var final_img =  {
    Username: req.body.Username,
      img:{
        data:  req.file.path,
       contentType:req.file.mimetype.toString(),
      }
   };
   console.log(final_img)
     await new image(final_img).save((err:any,result:any)=>{
      if(err){
          console.log(err);
      }else{
          console.log(result);
          console.log("Saved To database");
           res.contentType(final_img.img.contentType);
           res.send({"Status" : "ok"})
          // res.sendFile(`/root/Documents/hackathone/shared/server/uploads/${original_filename}`)
  }
     })
}}
})

app.post('/input_fields', async (req, res)=>{
  console.log(req.body.Username)
  var Title:any = [];
  [req.body].forEach((args:any) => args.data.forEach((e:any)=>Title.push(e.title) ))
  console.log(Title)
  const db_d = {
    Username: req.body.Username,
    data: Title
  }
  // Title = req.body.forEach(e:any => Title.push(element.title))
  // console.log(Title)
  await new input_fieds_schema_model(db_d).save();
  res.send({'Status': "ok"})
})

app.listen(8001, ()=>console.log(`PORT = 8000 , server is Running`))