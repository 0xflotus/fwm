const filewatcher = require("filewatcher");
const sh = require("shellsync");

const watcher = filewatcher();

watcher.add("./test.txt");

watcher.list();

watcher.on("change", function(file, stat) {
  console.log("File modified: %s", file);
  console.log(sh`cat ./test.txt`);
});
