// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { shortsCard } from "../styles/styles";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

/**
 * @param {string} key // unique id
 * @param {*} url // short thumbnail url
 * @param {*} shortsUrl // short short url
 * @param {number} views // short views number
 * @param {string} text // short title
 */

const Short = ({ id, url, views, text, shortsUrl }) => {
  return (
    <Link key={id} href={shortsUrl}>
      <Card sx={shortsCard}>
        <CardMedia
          component="img"
          height="300"
          image={url}
          alt="shorts image"
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="div">
            {text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {views} Views
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Short;

Short.prototype = {
  id: PropTypes.any,
  url: PropTypes.string,
  shortsUrl: PropTypes.string,
  text: PropTypes.string,
  views: PropTypes.number,
};
