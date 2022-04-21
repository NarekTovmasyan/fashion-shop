import { Label } from "semantic-ui-react";
import Cards from "../card/Cards";
import Slides from "../Slide/Slide";
import secondSlideData from "../../Services/secondSlideData"
import { Table, Sticky, Message } from "semantic-ui-react";
import { useEffect, useState } from "react"



function Products() {
  function handleDismiss() {
    setResponseInfo("");
  }
const [responseInfo, setResponseInfo] = useState("");
  return (
    <div className="home main ui container">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky >
           <Message success onDismiss={handleDismiss} content={responseInfo} />
      </Sticky>
      ) : (
        ""
      )}
      <Slides slides={secondSlideData()}/>
      <Cards 
      // pageDevider={countPageProduct}
       setResponseInfo={setResponseInfo}
      />
    </div>
    // <div className="home main ui container">
    //   <Slides slides={secondSlideData()}/>
    //   <Cards />
    // </div>
  );
}
export default Products;
