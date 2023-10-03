import UserProfile from "../../components/Auth/UserProfile"

// eslint-disable-next-line react/prop-types
export default function Profile({auth}) {
  return(
    <div >
      <UserProfile auth={auth}/>
    </div>
  )
}
