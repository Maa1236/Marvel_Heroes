import './MyTeam.css'
import { ListOfMyHeroes } from '../ListOfMyHeroes/ListOfMyHeroes';

/*var myTeamMapped;
export const MyTeam = ({myTeam}) => {
    console.log(myTeam)
    if (myTeam && myTeam.length !== 0) {
    myTeamMapped = myTeam.map((elem, index) => {
        return (
            <div className = "listItem">
                <img src={elem.image}></img>
                <h3>{elem.name}</h3>
            </div>
        )
    })
    console.log(myTeamMapped)
    }
*/
    return (
  
        <div className="myTeam">
            <h3>My Team</h3>
            {myTeamMapped}

        </div>
    );
};