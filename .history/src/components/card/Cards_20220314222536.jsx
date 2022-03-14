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
console.log("1",result);
  return (
    <div>
      {result.map((item) => {
          
        return <CardItem key={item._id} />;
      })}
    </div>
  );
};

export default Cards;
