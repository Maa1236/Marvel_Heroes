import './AllHeroes.css'

export const AllHeroes = ({arrayHeroes}) => {

    let mappingTheCards=arrayHeroes.map((hero,index)=>{

        return (
            
            
            <div className="card">
                    <h5 className="card-title">{hero.name}</h5>

                    <img className="card-img-top" src={hero.image} alt="slka " />

                    <div className="card-body">
                        <button className="card-link">Info</button>
                        <button className="card-link">Add</button>
                    </div>
            </div>


            
        );

    });

    return (<div className="allHeros">
                {mappingTheCards}
            </div>)
};