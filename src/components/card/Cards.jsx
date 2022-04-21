import { useEffect, useState } from "react";
import { getData, getProducts } from "../../Services/api";
import CardItem from "./CardItem";
import Paginations from "../pagination/Pagination";
import "./card.css";

const Cards = ({setResponseInfo}) => {
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);

  function getProductsByPage(productsByPage) {
    setProductsByPage(productsByPage);
  }
  useEffect(() => {
    (async () => {
      let data = await getProducts();
      setResult(data);
    })();
  }, []);

  return (
    <>
      <div className="ui stackable three column grid productItems">
        {productsByPage &&
          productsByPage.length > 0 &&
          productsByPage.map((item) => {
            return (
              <CardItem
                item={item}
                key={item.id}
                description={item?.description.comment || ""}
                img={item.img}
                name={item.name}
                price={item.price}
                currency={item.currency}
                stock={item.stock.count}
                setResponseInfo={setResponseInfo}
              />
            );
          })}
      </div>
      <Paginations result={result} getProductsByPage={getProductsByPage} />
    </>
  );
};

export default Cards;
