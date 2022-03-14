import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import CardItem from "./CardItem";

const Cards = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getData().then((param) => {
      setResult(param);
    });
  }, []);
  : 
  : 
  name: 
  pending: 
  price:
  _id
  return (
    <div>
      {result.map((item) => {
          
        return <CardItem key={item._id} description={item.description} image={item.image}  />;
      })}
    </div>
  );
};

export default Cards;
