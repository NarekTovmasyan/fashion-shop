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

  return (
    <div  className="total">
      {result.map((item) => {
        return (
          <CardItem
            key={item._id}
            description={item.description}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Cards;
