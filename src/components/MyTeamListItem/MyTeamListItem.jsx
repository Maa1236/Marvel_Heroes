import './MyTeamListItem.css'

export const MyTeamListItem = ({hero,index}) => {

        return(
            
            <li key={index} className="myHeroElem" >
                <img class="heroImg" src={hero.image} alt="slika heroja" />
                <img class="trashImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyyYTMqZGwWqxBwG0_8m6xesMjzwBSZ7kgw&usqp=CAU" alt="slika heroja" />
                <h5>{hero.name}</h5>
            </li>
        )


};