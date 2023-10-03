
import './AchievementCard.css'


// Prop passed from AchievementList
// eslint-disable-next-line react/prop-types
export default function AchievementCard({ el }) {
  return (
    
      <div className="card" >
        <header className="header">
          <title className="title">Achievement Name</title>
        </header>
        {/* <figure className="figure is-centered"> */}
          <img className="image" src="https://bulma.io/images/placeholders/96x96.png" alt="blank" style={{ width: '80%' }} />
        {/* </figure> */}
        <content>
          <p>Achievement description goes in here.</p>
          <h6>{el}</h6>
        </content>
      </div>
  )
}