import fileSchema from "../model/model.js"
import pkg from "jsonwebtoken"
const { sign } =pkg




export async function addFile(req,res) {
    console.log(req.body);
    
    const {profile} =req.body
    // check fiels are empty
    if(!(profile))
        return res.status(404).send({msg:"fields are empty"})
        await fileSchema.create({profile}).then((e)=>{
            console.log(e._id);
            const id=e._id
            const token= sign({id},process.env.JWT_TOKEN,{expiresIn:"10s"})
                res.status(201).send({msg:"successfully uploaded",id,token})
            }).catch((error)=>{
                res.status(500).send(error)
            })  
      
}

export async function getFile(req,res){
    try {
        const {_id} =req.params
    console.log(_id);
    const data= await fileSchema.findOne({_id})
    res.status(200).send({profile:data.profile})
    } catch (error) {
        res.status(400).send({error})
    }
    
}
