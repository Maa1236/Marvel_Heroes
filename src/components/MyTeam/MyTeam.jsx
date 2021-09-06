import './MyTeam.css'
import{MyTeamListItem} from '../MyTeamListItem/MyTeamListItem'

export const MyTeam = ({selectedHeroes}) => {

    let myTeamMapped=selectedHeroes.map((hero,index)=>{

        return(
                <MyTeamListItem hero={hero} 
                index={index}
                />
        )

    })

    return (
  
        <div className="myTeam">
            <h3>My Team</h3>
            <ul>
                {myTeamMapped}
            </ul>

        </div>
    );
};