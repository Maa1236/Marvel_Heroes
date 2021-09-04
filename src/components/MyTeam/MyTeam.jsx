import './MyTeam.css'
import { ListOfMyHeroes } from '../ListOfMyHeroes/ListOfMyHeroes';


export const MyTeam = () => {
    return (
  
        <div className="myTeam">
            <h3>My Team</h3>
            <ListOfMyHeroes />
        </div>
    );
};