import { useContext } from 'react';
import DataContext from './context/DataContext';

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div id={employee.id} onClick={handleEmployeeCardClick} style={{ cursor: "pointer" }} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}>
      {<img src={employee.img} className="card-img-top" alt="profile" />}
      <div className="card-body">
        <h5 className="card-title">{employee.fullName}</h5>
        <p className="card-text">{employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard