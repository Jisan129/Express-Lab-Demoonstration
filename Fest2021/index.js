const app = require("./app");
require("dotenv").config();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App is running at http:\\localhost:${PORT}.`);
});
