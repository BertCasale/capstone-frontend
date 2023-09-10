
import AchievementsList from "../../pages/Profile/AchievementsList"
import FriendsList from "../../pages/Profile/FriendsList"
import ProfileCard from "../../pages/Profile/ProfileCard"
import { Tabs, Container, Content } from "react-bulma-components"
import { useState } from "react"

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile')

  const toggleTab = (index) => {
    setActiveTab(index)
    console.log(`current active tab is ${index}`);
  }

  return (
    <div>
      <Container className="mt-6">
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
      </Container>

    </div>
  )
}
