import { useState } from "react";
import {getData} from "../../services/api"

const Cards = () => {
    const[result, setResult]=useState([]);

    getData().then((param)=>{
        setResult(param);
    });
    console.log(result);
    return (
        <div>
            
        </div>
    );
}

export default Cards;
