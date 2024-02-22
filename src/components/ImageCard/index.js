import Box from '@mui/material/Box';
import Image from 'next/image'
const ImageCard = ({ src }) => {
  return (
    <Box sx={{
      width: { lg: 250, md: 230, sm: 180, xs: 150 },
      height: { lg: 250, md: 230, sm: 180, xs: 150 },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto'
      
    }}>
      <Image
        src={!src ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png" : src}
        alt="profile-image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: '50%'
        }}
      />
    </Box>
  );
};

export default ImageCard;
