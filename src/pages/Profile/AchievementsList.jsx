// import { Columns, Column } from "react-bulma-components";
import AchievementCard from "./AchievementCard";
import "./AchievementList.css"

export default function AchievementsList() {
  const achievements = [
    'started your journey',
    'completed first exercise',
    'completed first full lesson',
    'updating your avatar',
    '3 consecutive logins',
    'adding a friend',
    'provide feedback to friend',
    'getting feedback from friend',
    'refer a friend'
  ];

  return (
    <div className="achievement-container">
     {/* <div className="item"> */}
      {achievements.map((el, index) => {
        return <div className="item" key={index}>
          <AchievementCard el={el}/>
          </div>
       })}

      {/* </div> */}
    </div>
  );
}