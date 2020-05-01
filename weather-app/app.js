const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs=require('yargs')
yargs.command({
  command: "get",
  description: "Get temperature",
  builder: {
    location: {
      describe: "Location",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    getTemperature(argv.locatiopn);
  },
});

const getTemperature=(location)=>{
  geocode(location, (error, {location}={}) => {
    if (error) {
      return console.log(error);
    }
    forecast(location, (error, data) => {
      console.log({ error });
      if (error) {
        return console.log(error);
      }
      console.log({ data });
    });
  });
}

yargs.parse();

