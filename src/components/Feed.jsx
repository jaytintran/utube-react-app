import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar to show categories */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #000", px: { sx: 0, md: 2 }, mr: "15px" }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 Tin Tran
        </Typography>
      </Box>

      {/* Main Feed to show videos */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }} borderBottom="3px solid #F4063C" display="inline-block">
          {selectedCategory} <span style={{ color: "#F4063C" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
