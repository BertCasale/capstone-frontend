import { Card } from "react-bulma-components"

export default function AchievementCard() {
  return (
    <div>
      Achievement Card
      <div>
      <Card style={{width: '20%', margin: 'auto'}}>
    <Card.Header >
      <Card.Header.Title className="title is-centered is-5">Achievement Name</Card.Header.Title>
    </Card.Header>
    <figure className="figure is-centered">
    <img className="image" src="https://bulma.io/images/placeholders/96x96.png" alt="blank" style={{width:'90%'}}/>
    </figure>
    <Card.Content>
    <p>Achievement description goes in here.</p>
    {/* <p>User achievement</p> */}
    </Card.Content>
    </Card>
    </div>
    </div>
  )
}
