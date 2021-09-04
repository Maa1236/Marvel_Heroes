import './AllHeroes.css';
import {Fragment} from 'react';
import { HeroCard } from '../HeroCard/HeroCard';
import { Search } from '../Search/Search';

export const AllHeroes = ({arrayHeroes}) => {

    let mappingTheCards=arrayHeroes.map((hero,index)=>{

        return (
        <Fragment >
            <Search />
            <HeroCard hero={hero}/>
        </Fragment>
        );

    });

    return (<div className="allHeros">
                { mappingTheCards }
            </div>)
};