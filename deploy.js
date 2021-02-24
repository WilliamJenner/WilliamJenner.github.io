const { publish } = require("gh-pages");
const { redBright, yellowBright, greenBright } = require("chalk");
const { homepage } = require("./package.json");
const { join } = require("path");

const trim = (str) => str.replace(/^\s+|\s+$/gm, "");

const config = {
  add: true,
  message:
    "feat(update): Auto-generated commit from gh-pages, see develop for non-built source files",
  branch: "master",
};

const { starting, error, success } = {
  starting: () =>
    console.log(
      yellowBright(
        trim(`
    =========================
    GitHub Pages Deploy Script
    =========================
    > Publishing to Branch: ${config.branch}...`)
      )
    ),
  error: (ex) => {
    console.log(redBright(JSON.stringify(ex)));
    throw ex;
  },
  success: (msg) => console.log(greenBright(msg)),
};

const handlePublishResult = (ex) => {
  if (ex) {
    error(ex);
  } else {
    success(`Success! Site hosted at ${homepage}`);
  }
};

starting();

publish(join(__dirname, "build"), config, handlePublishResult);
