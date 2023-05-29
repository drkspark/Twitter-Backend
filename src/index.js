const express = require("express");
const connect = require("./config/database");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server Started at http://localhost:${PORT}`);
    await connect();
    console.log("MongoDB Connected");
});
