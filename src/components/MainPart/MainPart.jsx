import React, { useEffect, useState } from "react";
import "./MainPart.css";
import { HeroService } from "../../services/HeroService";
import { MyTeam } from "../MyTeam/MyTeam";
import { AllHeroes } from "../AllHeroes/AllHeroes";
//import { MyTeamListItem } from "../MyTeamListItem/MyTeamListItem";

const MainPart = () => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  var myTeam;
  const addHeroToMyTeam = (hero) => {
    myTeam = [...selectedHeroes];
    let heroExists = myTeam.filter(item=>item.id === hero.id);
    if(heroExists && heroExists.length>0) {
        alert("Hero already selected");
    } else {
        myTeam.push(hero);
        setSelectedHeroes(myTeam);
    }
  };
  // const removeHeroFromMyTeam=(hero)={
  //   let deletedHero = selectedHeroes.filter(item => item.id !==hero.id);
  //   setSelectedHeroes(deletedHero);
  // }
  


  console.log(selectedHeroes);
  

  useEffect(() => {
    HeroService().then((heroes) => {
      setHeroes(heroes);
    });
  }, [setHeroes]);

  let arrayHeroes = heroes;

  return (
    <div className="mainClass">
      <AllHeroes addHeroToMyTeam={addHeroToMyTeam} arrayHeroes={arrayHeroes} />
      <MyTeam 
      selectedHeroes={selectedHeroes} />
    </div>
  );
};

export default MainPart;
