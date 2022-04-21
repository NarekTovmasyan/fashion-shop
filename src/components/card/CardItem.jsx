import "./cardItem.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import BuyProduct from "../buyProduct/BuyProduct";
import { Link } from "react-router-dom";
import logo from "../../img/speakToy.jpg";

function CardItem({ description, img, name, price, item, currency, stock, setResponseInfo }) {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  return (
    <>
    <Card centered>
      <Image className="cardImg"
        src={img.length > 0 && img[0].imagePath ? img[0].imagePath : logo}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Content>
          {price} {currency}
        </Card.Content>
        <Card.Description>{description}</Card.Description>
        <Card.Content>
        {`In Stock ${stock}`}
        </Card.Content>
      </Card.Content>

      <Card.Content>
        {isAuthenticated ?(        
          <BuyProduct
            stock={stock} 
            item={item}
            productInfo={{ description, img, name, price, currency }}
            setResponseInfo={setResponseInfo}
          />
        ) : (
          <Button onClick={loginWithRedirect} text="login" className="buyBtn">
          {/* <Button as={Link} to="/login" className="buyBtn"> */}
            BUY
          </Button>
        )}
      </Card.Content>
    </Card>

    </>

  );
}

export default CardItem;
