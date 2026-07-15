const mongoose = require("mongoose");
const initDatata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connect to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
ley = initDB = async () => {
  await Listing.deleteMany({});
  initDatata.data = initDatata.data.map((obj) => ({
    ...obj,
    owner: "6a50820d915f40fc6f52892b",
  }));
  await Listing.insertMany(initDatata.data);
  console.log("data was intialized");
};
initDB();
