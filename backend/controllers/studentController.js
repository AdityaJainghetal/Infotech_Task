
const StuModel=require("../models/studentModels");
const dataSave=async(req, res)=>{
const {rollno, name, city, fees}= req.body;
const data=await StuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
})
res.send(data)
}
const dataDisplay=async(req, res)=>{
    const myData= await StuModel.find();
    res.send(myData);
}
const dataSearch=async(req, res)=>{
    const {rollno} = req.body;
    const mydata=await StuModel.find({rollno:rollno})
    res.send(mydata);
}
const deleteDataDisplay=async(req, res)=>{
       const Data= await  StuModel.find();
       res.send(Data);
}
const recordDelete=async(req, res)=>{
    const {myid} = req.body;
    const myRes=await    StuModel.findByIdAndDelete(myid);
    res.send(myRes);
}


const editDisplay=async(req, res)=>{
    const {id}=req.query;
    const Data= await StuModel.findById(id);
   
    res.send(Data)
}

const editDataSave=async(req, res)=>{
    const {id, _id, rollno, name, city, fees}= req.body;

    const myres=await StuModel.findByIdAndUpdate(id, {
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
 
    res.send("OK");
}

const statusChange= async(req,res)=>{
    try {
        const {id} = req.body
        const Task =await StuModel.findByIdAndUpdate(id,{status:"Completed"})
        res.status(200).send(Task);
    } catch (error) {
        console.log(error)
    }
   
}

module.exports={
    dataSave,
    dataDisplay,
    dataSearch,
    deleteDataDisplay,
    recordDelete,
    editDisplay,
    editDataSave,
    statusChange

}
