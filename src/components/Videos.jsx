import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />;
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent={{xs: "center", md: 'space-around'}} alignItems={{xs: 'center', md: 'start'}} gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;
