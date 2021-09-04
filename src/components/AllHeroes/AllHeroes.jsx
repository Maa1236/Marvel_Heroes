import './AllHeroes.css';
import { HeroCard } from '../HeroCard/HeroCard';

export const AllHeroes = ({arrayHeroes}) => {

    let mappingTheCards=arrayHeroes.map((hero,index)=>{

        return (
            <HeroCard hero={hero}/>
        );

    });

    return (<div className="allHeros">
                { mappingTheCards }
            </div>)
};