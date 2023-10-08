
import AchievementsList from "../../pages/Profile/AchievementsList"
import FriendsList from "../../pages/Profile/FriendsList"
import ProfileCard from "../../pages/Profile/ProfileCard"
import { Tabs, Content } from "react-bulma-components"
import { useState } from "react"
import profileImage from '../../../src/assets/avatar-placeholder.png'
import defaultProfileImage from '../../../src/assets/avatar-placeholder.png'

// eslint-disable-next-line react/prop-types
export default function UserProfile({auth, userDetails}) {

  

  const imageSize = '150px'; // Default size is 50px, but you can customize it

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    padding: 9,
    borderRadius: '50%',
    objectFit: 'cover', // Ensure the image covers the entire circle
  };

  const [activeTab, setActiveTab] = useState('profile')

  const toggleTab = (index) => {
    setActiveTab(index)
    console.log(`current active tab is ${index}`);

   

  }

  return (
    <div>
      
        <header className="header" style={{height: '80px', width:'100%', backgroundColor: 'gray'}} >
         
          <img
      src={profileImage}
      alt={defaultProfileImage}
      style={imageStyle}

        />
        <h3>{auth}</h3>
        </header>
        <header className="header" style={{height: '80px', width:'100%', backgroundColor: 'lightgrey'}}>
          <br></br>
          <br></br>
          <br></br>
        
        </header>
        <div>
        <ProfileCard userDetails={userDetails}/>
        </div>
     
      <div style={{ height:'70%',width:'100%', backgroundColor: 'lightblue'}}>
       
        <Tabs className="is-centered is-boxed is-toggle">
          <div className="is-flex">
            <Tabs.Tab className={activeTab === 'profile' ? "tabs is-active" : "tabs"} onClick={() => toggleTab('profile')}>Profile</Tabs.Tab>
            <Tabs.Tab className={activeTab === 'achievements' ? "tabs is-active" : "tabs"} onClick={() => toggleTab('achievements')}>Achievements</Tabs.Tab>
            <Tabs.Tab className={activeTab === 'friends' ? "tabs is-active" : "tabs"} onClick={() => toggleTab('friends')}>Friends</Tabs.Tab>
          </div>
        </Tabs>
        <Content>
          {activeTab === 'profile' && (
            <div className="is-active">
              <ProfileCard />
            </div>
          )}
          {activeTab === 'achievements' && (
            <div className="is-active">
              <AchievementsList />
            </div>
          )}
          {activeTab === 'friends' && (
            <div className="is-active">
              <FriendsList />
            </div>
          )}
        </Content>
      </div>

    </div>
  )
}