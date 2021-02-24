const ghpages = require("gh-pages");
const chalk = require("chalk");
const packageJson = require("../package.json");

const trim = (str) => str.replace(/^\s+|\s+$/gm, "");

const output = {
  starting: function () {
    const text = trim(`
          =========================
          Publishing GitHub Page
          =========================
          > Publishing to: ${packageJson.homepage}...
      `);

    console.log(chalk.green(text));
  },
  error: function (ex) {
    if (typeof ex !== "object") {
      console.log(chalk.red(ex));
      throw new Error(ex);
    }

    console.log(chalk.red(ex.message));
    throw ex;
  },
  success: function (msg) {
    console.log(chalk.green(msg));
  },
};

output.starting();

var buildDir = __dirname.replace("scripts", "build");

ghpages.publish(
  buildDir,
  {
    add: true,
    message: "Auto-generatec commit from gh-pages",
    branch: "master",
  },
  (err) => {
    if (err) {
      output.error(err);
    } else {
      output.success("Successfully published GitHub Page.");
    }
  }
);
