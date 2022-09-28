require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(cors());

__dirname = path.resolve();

/**
 * app.use()
 * the middleware function is executed when the base of the requested path matches path.
 */
 app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true // Since we configured graphqlHTTP with graphiql: true, you can use the GraphiQL tool to manually issue GraphQL queries
  })
)


if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("public"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}  else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Project Management App' })
  })
}


app.listen(port, console.log(`Server running on port ${port}`));
