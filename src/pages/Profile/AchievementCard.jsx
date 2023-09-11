import { Card } from "react-bulma-components"

export default function AchievementCard() {
  return (
    <div>
      Achievement Card
      <div>
      <Card >
    <Card.Header>
      <Card.Header.Title>Achievement Name</Card.Header.Title>
    </Card.Header>
    <img className="image" src="https://bulma.io/images/placeholders/96x96.png" alt="blank"/>
    <Card.Content>
    <p>Achievement description goes in here.</p>
    <p>User achievement</p>
    </Card.Content>
    </Card>
    </div>
    </div>
  )
}
