import React, { useEffect } from "react";
import "./MainPart.css";
import { HeroService } from "../../services/HeroService";
import { MyTeam } from "../MyTeam/MyTeam";
import { AllHeroes } from "../AllHeroes/AllHeroes";


const MainPart = ({heroes, setHeroes}) => {
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
