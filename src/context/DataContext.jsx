import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
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

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
        : { ...employee, teamName: selectedTeam } : employee);
    setEmployees(transformedEmployees);
  }
  return <DataContext.Provider value={{
    employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick, setTeam
  }}>
    {children}
  </DataContext.Provider>
};

export default DataContext;