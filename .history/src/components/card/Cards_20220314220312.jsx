import {getData} from "../../services/api"

const Cards = () => {
    console.log(getData().then((param)=>{
        console.log(param);
    }));
    return (
        <div>
            
        </div>
    );
}

export default Cards;
