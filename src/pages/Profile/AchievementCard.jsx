import { Card } from "react-bulma-components"

export default function AchievementCard() {
  return (
    <div>
      Achievement Card
      <Card>
    <Card.Header>
      <Card.Header.Title>Achievement Name</Card.Header.Title>
    </Card.Header>
    <Card.Image 
    className="image is-64x64"
    src="https://bulma.io/images/placeholders/96x96.png"/>
    <Card.Content>
    <p>Achievement description goes in here.</p>
    <p>User achievement</p>
    </Card.Content>
    </Card>
    </div>
  )
}
