const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  dbName: "Employee",
  autoIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Failed"));
db.once("open", () => {
  console.log("Database Connected");
});
