

export default function ProtectedDashboard({user, setUser}) {
  //props passed from Navbar
  console.log(user);
  return (
      user ? ( <a className="navbar-item" href="/dashboard">
      Dashboard
    </a>) : null  
  )
}
