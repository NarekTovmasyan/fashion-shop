import { Card, Icon, Image } from 'semantic-ui-react'

function CardItem({description, image, name, price}){
    return (
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      )
}

export default CardItem;