const getData = require("../utils/get-data");
const {globals} = require("../specs/setup/dev.chrome")

class DataReader {
  static async read(key) {
    const data = await getData(globals.ENV);
    return data[key];
  }
}

module.exports = DataReader;
