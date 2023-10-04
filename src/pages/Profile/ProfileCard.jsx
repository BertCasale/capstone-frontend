
// eslint-disable-next-line react/prop-types
export default function ProfileCard({userDetails}) {
  return (
    <div className="ml-4">
      <h2>Profile card</h2>
      {/* <p>Name: {userDetails.username}</p> */}
      <p>Avatar</p>
      <p>Email</p>
      <button>Edit</button>  
    </div>
  )
}