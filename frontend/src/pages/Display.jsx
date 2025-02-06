import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8080/students/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data)
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, [])

    const taskStatusChange = async (id) => {
      try {
          const api = "http://localhost:8080/students/taskstatuschange";
          const response = await axios.post(api, { id: id });
          console.log(response.data);
          loadData(); // Reload data after status change
      } catch (error) {
          console.error("Error changing task status:", error);
      }
  };
 

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
                <td>
                <button onClick={() => taskStatusChange(key._id)}>{key.status}</button>
            </td>
              </tr>
            </>
        )
    })
    return(
        <>
          <h1> Display page</h1>
          <hr/>

          <table border="1" style={{backgroundColor:"aqua", color:"black", width:"1000px", textAlign:"center"}}>
            <tr style={{color:"black", fontSize:"20px", backgroundColor:"red"}}>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Tast Status</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;