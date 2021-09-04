import React, { useEffect,useState } from "react";
import "./MainPart.css";
import { HeroService } from "../../services/HeroService";
import { MyTeam } from "../MyTeam/MyTeam";
import { AllHeroes } from "../AllHeroes/AllHeroes";


const MainPart = () => {

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        
        HeroService().then((heroes) => {
                setHeroes(heroes);
            });
        
    },[setHeroes]);

let arrayHeroes=heroes;

    
    return (
      <div className="mainClass">
          <AllHeroes 
          arrayHeroes={arrayHeroes}
                    />
          <MyTeam />
      </div>
    );




};

export default MainPart;
