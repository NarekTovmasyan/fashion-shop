import { Button, Card, Icon, Image } from "semantic-ui-react";
import "./cardItem.css";
import BuyProduct from "../buyProduct/BuyProduct";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function CardItem({ description, image, name, price }) {
  const { isAuthenticated } = useAuth0();

  function buy() {}

  return (
    <Card centered>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{description.comment}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {price}
        {isAuthenticated ? (
          <BuyProduct />
        ) : (
          <Button as={Link} to="/login">
            BUY
          </Button>
        )}

        {/* <a>
              <Icon name='user' />
              22 Friends
            </a> */}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons"></div>
      </Card.Content>
    </Card>
  );
}

export default CardItem;
