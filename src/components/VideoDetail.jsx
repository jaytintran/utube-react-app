import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from '@mui/material/Grid';

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Box px={2}  sx={{ position: {md: "sticky"}, top: {md: 0} }}>
              <Box sx={{ width: "100%", borderRadius: "3rem", }} >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                  {title}
                </Typography>
                <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                  <Link to={`/channel/${channelId}`}>
                    <Typography variant={{ sm: "subtitle2", md: 'h6' }} fontWeight="bold" color="#fff" >
                      {channelTitle}
                      <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                  </Link>
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} pr={2}>
            <Box px={3} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center' >
              <Videos videos={videos} direction="column" />
            </Box>
          </Grid>
        </Grid>
    </Box>
  );
};

export default VideoDetail;
