import React, { useState, useRef } from "react";
import ForecastCard from "./components/ForecastCard";
import GetForecastList from "./services/ForecastService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./css/forecast-form.css";

export default function Forecast() {
  const [forecastResponse, setforecastResponse] = useState();
  const [errors, setErrors] = useState([]);

  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipcodeRef = useRef();

  function handleOnClick() {
    const street = streetRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const zipcode = zipcodeRef.current.value;
    console.log(city);

    GetForecastList(
      street,
      city,
      state,
      zipcode,
      setforecastResponse,
      setErrors
    );
  }

  return (
    <>
      <h1>Forecast</h1>
      <TextField
        label="Street"
        variant="outlined"
        size="small"
        inputRef={streetRef}
        type="text"
        className="text-field"
        id="street-field"
      />
      <TextField
        label="City"
        variant="outlined"
        size="small"
        inputRef={cityRef}
        type="text"
        className="text-field"
      />
      <TextField
        label="State"
        variant="outlined"
        size="small"
        inputRef={stateRef}
        type="text"
        className="text-field"
      />
      <TextField
        label="Zipcode"
        variant="outlined"
        size="small"
        inputRef={zipcodeRef}
        type="text"
        className="text-field"
      />
      <Button variant="contained" onClick={handleOnClick}>
        Search
      </Button>

      {forecastResponse &&
        forecastResponse.periods.map((forecast, index) => {
          return <ForecastCard key={index} forecast={forecast} />;
        })}

{errors && 
    errors.map((error, index) => {
        return <p className="errorMessage" key={index} >{error}</p>
    })}
    </>
  );
}
