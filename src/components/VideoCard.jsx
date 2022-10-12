import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {  
  return (
    <Card sx={{ width: { xs: '450px', sm: '358px', md: "400px", }, height: '300px', boxShadow: 'none', borderRadius: '.25rem' }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
          alt={snippet?.title} 
          sx={{ width: { xs: '100%', sm: '100%'}, height: 180 }} 
        />
        <CardContent 
          sx={{ backgroundColor: '#22223b', height: '106px' }}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
              {
                snippet?.title.slice(0, 50) ||
                demoVideoTitle.slice(0, 50)
              }
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              {
                snippet?.channelTitle.slice(0, 58) ||
                demoChannelTitle.slice(0, 58)
              }
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

// const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
//   <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
//     <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
//       <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
//         sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
//       />
//     </Link>
//     <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
//       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
//         <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
//           {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
//         </Typography>
//       </Link>
//       <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
//         <Typography variant="subtitle2" color="gray">
//           {snippet?.channelTitle || demoChannelTitle}
//           <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
//         </Typography>
//       </Link>
//     </CardContent>
//   </Card>
// );

export default VideoCard