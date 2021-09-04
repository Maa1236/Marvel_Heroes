import './AllHeroes.css';
import { HeroCard } from '../HeroCard/HeroCard';
import { Search } from '../Search/Search';
import {useState} from 'react';

export const AllHeroes = ({arrayHeroes, addHero}) => {

    const [searchTerm, setSearchTerm] = useState("");

      let mappingTheCards = arrayHeroes.filter((elem) => {
        let result = null;
        if (searchTerm === "") {
          result = elem;
        } else if (elem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          result = elem;
        }  return result;
    }).map((hero,index)=>{

        return (
        
            <HeroCard 
            addHero={addHero}
            hero={hero}/>
        
        );

    });

    return (<div className="allHeros">
         <Search setSearchTerm={setSearchTerm} />
                { mappingTheCards }
            </div>)
};