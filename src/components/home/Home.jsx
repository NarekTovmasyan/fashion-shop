import Cards from "../card/Cards";
import Slide from "../Slide/Slide"
import slidesData from "../../Services/slideData";
import "../home/home.css"
import { Table, Icon, Message } from "semantic-ui-react";
import {useState} from "react"

function Home(){
    const [responseInfo, setResponseInfo] = useState("");
    function handleDismiss() {
    setResponseInfo("");
  }
    return (
        <div className="home main ui container">
       {responseInfo && responseInfo.length > 0 ? (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        ""
      )}
      <Slide slides={slidesData()} />
      <Cards
    //    pageDevider={countPageProduct}
      setResponseInfo={setResponseInfo}
      />
    </div>
    //    <div className="home main ui container">
    //         <Slide slides={slidesData()}/>
    //         <Cards />
    //    </div>
    )
}
export default Home;