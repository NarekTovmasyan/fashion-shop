import "./footer.css"
import { Link, Outlet } from "react-router-dom";
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
    Icon, 
  } from 'semantic-ui-react'

function Footer(){
    return (       
        <div id="footer">                                                    
        <Segment inverted  vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <List link inverted>
                <List.Item as={Link} to="/">
                     Home
                </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <List link inverted>
                <List.Item as={Link} to="/products">
                    Products
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <List link inverted>
                <List.Item as={Link} to="/dashboard">
                    Dashboard
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Contacts' />
                <List link inverted>
                  <List.Item href="https://www.facebook.com/" as='a'>
                    <Icon name='facebook' />
                  </List.Item>
                  <List.Item href="https://www.linkedin.com/in/narek-tom/" as='a'>
                    <Icon name='linkedin' />
                    </List.Item>
                  <List.Item href="https://github.com/NarekTovmasyan" as='a'>
                    <Icon name='github' />
                    </List.Item>
                  <List.Item as='a'><Icon name='phone' />+374 94 27 67 00</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
        </div>
    )
}

export default Footer;

