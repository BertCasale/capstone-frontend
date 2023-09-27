import { useState, useEffect } from 'react';
import profileImage from '../../../src/assets/avatar-placeholder.png'
import defaultProfileImage from '../../../src/assets/avatar-placeholder.png'
import Portal from '../Portal';
import { Link } from 'react-router-dom';
import SignOut from '../Auth/SignOut';
import { usePopper} from 'react-popper'
import { Card } from 'react-bulma-components';
import DropdownMenu from './DropdownMenu';
// import { auth } from '../../services/config/firebase';


export default function ProfilePic({setUser}) {

  const imageSize = '60px'; // Default size is 50px, but you can customize it

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    padding: 9,
    borderRadius: '50%',
    objectFit: 'cover', // Ensure the image covers the entire circle
  };

  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();

  const {styles, attributes} = usePopper(referenceElement, popperElement, {placement: 'bottom-start'})

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

<div className='image-container' ref={setReferenceElement}> 
    <img
      src={profileImage}
      alt={defaultProfileImage}
      style={imageStyle}
      onClick={handleProfilePicToggle}
    />
    {isProfilePicMenuActive && (
      <Portal>
       <div className='card' style={{backgroundColor: 'lightseagreen', width: '100%'}}> 
       <div className="popup-menu" 
       ref={setPopperElement}
       style={styles.popper}
       {... attributes.popper}
       >
       <DropdownMenu 
       setUser={setUser}
       setIsProfilePicMenuActive={setIsProfilePicMenuActive}
       />
       </div>
       </div>
       
       </Portal>
     
   )}
</div>

)}
