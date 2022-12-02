import React,{useState} from 'react'
import axios from "axios";

function AddStudent()  {


    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


    function sendData(e){
       e.preventDefault();
        
       const newStudent = {
        name,
        age,
        gender
       }

       axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
        alert("Student Added")
       }).catch((err)=>{
        alert(err)
       })


    }


  return (

    <div className='container'>
      <form onSubmit={sendData}>
        <div className="form-group">

        <div className="mb-3">

            <label htmlFor="name" className="form-label">Student Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Student Name"
            onChange={(e)=>{
                setName(e.target.value);
            }}/>

        </div>


        <div className="mb-3">

            <label htmlFor="age" className="form-label">Student Age</label>
            <input type="number" className="form-control" id="age" placeholder="Enter Student Age"
            onChange={(e)=>{
                setAge(e.target.value);
            }}/>
        </div>


        <div className="mb-3">

            <label htmlFor="gender" className="form-label">Student Gender</label>
            <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
            onChange={(e)=>{
                setGender(e.target.value);
            }}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

        </div>
      </form>
    </div>

  )

}

export default AddStudent
