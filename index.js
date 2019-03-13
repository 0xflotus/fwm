const filewatcher = require("filewatcher");
const sh = require("shellsync");

const { cmd, file } = require("yargs").argv;

if (!cmd || !file) {
  console.log("Please specify <file> and <cmd>");
  process.exit(-1);
}

const watcher = filewatcher();
watcher.add(file);
watcher.on("change", async function(dat, _) {
  console.log("File modified: %s", dat);
  await sh.out(cmd);
});
