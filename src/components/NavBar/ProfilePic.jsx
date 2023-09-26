import { useState, useEffect } from 'react';
import profileImage from '../../../src/assets/avatar-placeholder.png'
import defaultProfileImage from '../../../src/assets/avatar-placeholder.png'
import Portal from '../Portal';
import { Link } from 'react-router-dom';
import SignOut from '../Auth/SignOut';


export default function ProfilePic() {

  const imageSize = '60px'; // Default size is 50px, but you can customize it

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    padding: 9,
    borderRadius: '50%',
    objectFit: 'cover', // Ensure the image covers the entire circle
  };

  // toggle state for profile avatar menu-------------------
  const [isProfilePicMenuActive, setIsProfilePicMenuActive] = useState(false)

  const handleProfilePicToggle = () => {
    setIsProfilePicMenuActive(!isProfilePicMenuActive)
    console.log('menu toggle status', isProfilePicMenuActive)

  }

  //Close profile Menu on outide click------------------
  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isProfilePicMenuActive && !e.target.closest('.image-container')) {
        setIsProfilePicMenuActive(false);
      }
    };
    document.addEventListener('click', closeMenuOnOutsideClick);
  
    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isProfilePicMenuActive]);
  
//RENDERED Return below------------------
  return (

<div className='image-container'> 
    <img
      src={profileImage}
      alt={defaultProfileImage}
      style={imageStyle}
      onClick={handleProfilePicToggle}
    />
    {isProfilePicMenuActive && (
      <Portal>
       <div className="popup-menu">
       <ul>
         <li>
          <Link>Profile</Link>
         </li>
         <li>
          <Link>Notifications</Link>
         </li>
         <li>
          {<SignOut/>}
          </li>
       </ul>
     </div>
     </Portal>
   )}
</div>

)}
