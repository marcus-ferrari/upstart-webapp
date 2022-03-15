import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Moment from 'moment';

import "../css/forecast-card.css";

export default function ForecastCard({ forecast }) {
  return (
    <Card className="card" sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" } } className="box-content">
        <CardContent sx={{ flex: "1 0 auto" }} className="card-content" >
          <Typography component="div" variant="h5">
          {forecast.temperature}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            className="short-forecast"
          >
             {forecast.shortForecast}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
              <b>Wind Speed</b>: {forecast.windSpeed}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
              <b>Start time</b>: {Moment(forecast.startTime).format('MM/DD/YYYY LT')}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
              <b>End time</b>: {Moment(forecast.endTime).format('MM/DD/YYYY LT')}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
              <b>Detail</b>: {forecast.detailedForecast}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={forecast.icon}
      />
    </Card>
  );
}
