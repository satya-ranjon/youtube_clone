// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { flexColumnCenter } from "../styles/styles";
import trimText from "../utils/trimText";
import { AiFillCheckCircle } from "react-icons/ai";

/**
 * return single video card
 * @param {string} url // thumbnail image url
 * @param {string} title // video title
 * @param {string} channelTitle // channel name
 * @param {string} videoId // video id
 */

const VideoCard = ({ url, title, channelTitle, videoId }) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
        <CardMedia component="img" height="240" image={url} alt={title} />
      </Link>
      <CardContent sx={{ m: 0, p: 0 }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="channel avatar"
                src="https://res.cloudinary.com/dcpbu1ffy/image/upload/v1674757390/pp/pp_oeue4y.png"
              />
            </ListItemAvatar>
            <Box sx={flexColumnCenter}>
              <Typography
                sx={{ fontWeight: "bold", mb: 1 }}
                gutterBottom
                variant="h5"
                component="div">
                {trimText(title)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ mr: 1, mb: 0, p: 0 }}
                  gutterBottom
                  variant="h5"
                  component="div">
                  {channelTitle}
                </Typography>
                <AiFillCheckCircle />
              </Box>
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

VideoCard.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};
