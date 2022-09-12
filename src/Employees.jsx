import { useState } from "react";
import Bob from "./images/Bob.jpg"
import Jill from "./images/Jill.png"
import Gail from "./images/Gail.jpg"
import Sam from "./images/Sam.jpg"
import David from "./images/David.jpg"
import Sarah from "./images/Sarah.jpg"
import James from "./images/James.jpg"
import Jessica from "./images/Jessica.jpg"
import Lita from "./images/Lita.jpg"
import Daniel from "./images/Daniel.jpg"
import Adrian from "./images/Adrian.png"
import Devin from "./images/Devin.jpg"

const Employees = () => {

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA",
    img: Bob
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA",
    img: Jill
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA",
    img: Gail
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB",
    img: Sam
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB",
    img: David
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB",
    img: Sarah
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC",
    img: James
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC",
    img: Jessica
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC",
    img: Lita
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD",
    img: Daniel
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD",
    img: Adrian
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD",
    img: Devin
  }]);


  return (
    <main className="container"> 
      <div className="row justify-content-center mt-3">
        <div className="col-8">
      {
        employees.map((employee) => ( 
          <div key={employee.id} className="Card">
            <img src={employee.img} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"> Name: {employee.fullName}</h5>
              <p className="card-text"><b>Designation:</b> {employee.designation} </p>
            </div>
          </div>
        ))
      }
        </div>
      </div>
    </main>
  )
}
export default Employees;