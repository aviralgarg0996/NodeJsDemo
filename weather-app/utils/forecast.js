const request = require("postman-request");

const forecast = (location, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ca1f9bf0ff77cbf2f9ed256b93cddeb9&%20query=" +
    location;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to Location services ");
    } else if (body.error) {
      callback("Wrong place entered");
    } else {
      callback(null, {
        currentTemp: body.current.temperature,
      });
    }
  });
};
module.exports = forecast;
