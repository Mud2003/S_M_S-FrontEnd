import React, {useState, useEffect} from 'react';
import axios from "axios";

function AllStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
        axios.get("http://localhost:8070/student/").then((res) => {
            setStudents(res.data);
        }).catch((err) => {
            alert(err.massage);
        })
    }
    getStudents();
  }, [])

  return (  
    <div className='container'>
        <h1>AllStudents</h1>
    </div>
  )
}

export default AllStudents