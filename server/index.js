require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = 34056;

const app = express();

// Connect to database
connectDB();

app.use(cors());

__dirname = path.resolve();

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("public"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
} else {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === "development",
    })
  );
}

app.listen(port, console.log(`Server running on port ${port}`));
