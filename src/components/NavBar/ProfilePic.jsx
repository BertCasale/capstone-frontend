import { Menu } from 'react-bulma-components';
import profileImage from '../../../src/assets/avatar-placeholder.png'
import defaultProfileImage from '../../../src/assets/avatar-placeholder.png'

export default function ProfilePic() {

  const imageSize = '60px'; // Default size is 50px, but you can customize it

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    padding: 9,
    borderRadius: '50%',
    objectFit: 'cover', // Ensure the image covers the entire circle
  };

  const handleClick = () => {

  }



  return (
    <div>
      <div
      // style={{
      //   width: imageSize,
      //   height: imageSize,
      //   borderRadius: '50%',
      //   overflow: 'hidden', // Clip the image to the circle
      // }}
      >
        <img
          src={profileImage}
          alt={defaultProfileImage}
          style={imageStyle}
          onClick={handleClick}
        />
      </div>

    </div>
  )
}
