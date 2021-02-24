const { publish } = require("gh-pages");
const { redBright, yellowBright, greenBright } = require("chalk");
const { homepage } = require("./package.json");
const { join } = require("path");

const buildDir = join(__dirname, "build");

const config = {
  add: true,
  message: "Auto-generated commit from gh-pages",
  branch: "master",
};

const trim = (str) => str.replace(/^\s+|\s+$/gm, "");

const output = {
  starting: () => {
    const text = trim(`
          =========================
          GitHub Pages Deploy Script
          =========================
          > Publishing to Branch: ${config.branch}...
      `);

    console.log(yellowBright(text));
  },
  error: (ex) => {
    if (typeof ex !== "object") {
      console.log(redBright(ex));
      throw new Error(ex);
    }

    console.log(redBright(ex.message));
    throw ex;
  },
  success: (msg) => {
    console.log(greenBright(msg));
  },
};

const handlePublishResult = (ex) => {
  if (ex) {
    output.error(ex);
  } else {
    output.success(`Success! Site hosted at ${homepage}`);
  }
};

output.starting();

publish(buildDir, config, handlePublishResult);
