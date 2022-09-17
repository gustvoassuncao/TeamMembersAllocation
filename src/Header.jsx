const Header = ({ selectedTeam, teamMemberCount }) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-6">
          <h1> Team Member Allocation </h1>
          <h3>if {selectedTeam} has {teamMemberCount} Members</h3>
        </div>
      </div>
    </main>
  )

}
export default Header;