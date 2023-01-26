// @ts-nocheck
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";

/**
 *  return to the video list
 * @param {array} items // video list array
 */

const VideosList = ({ items }) => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items.length &&
          items.map((item) => {
            const key = item.etag;
            const { videoId } = item.id;
            const { thumbnails, title, channelTitle } = item.snippet;
            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                <VideoCard
                  url={thumbnails.high.url}
                  title={title}
                  channelTitle={channelTitle}
                  videoId={videoId}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default VideosList;

VideosList.prototype = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
