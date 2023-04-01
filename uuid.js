const { v4 } = require("uuid");
const data = require("./data");
const fs = require("fs");
const save = require("jsonfile");

let res;

const arg = process.argv[2];

data
  .get(arg)
  .then((res) => {
    const payload = {
      name: res.data.name,
      v: res.data.v,
      uuid: getUUID(),
      author: "neon",
      timestamps: res.data.timestamps,
      github: "https://github.com/eloraa",
    };

    const name = `${arg}-${payload.uuid}.json`;
    const path = `./data/json/${name}`;
    save
      .writeFile(path, payload)
      .then((res) => {
        console.log(payload, "\n");
        console.log(
          "\x1b[4m%s\x1b[0m",
          `file saved with the name '${name}' under the 'data' folder`
        );
      })
      .catch((error) => console.error(error));
  })
  .catch((err) =>
    console.error("\x1b[41m%s\x1b[0m", "possibly the data does not exist.")
  );

// for (n in data) {
//     if(n == arg) return
//     else process.
// }

function getUUID() {
  let uuid = v4();
  uuid = uuid.substring(0, uuid.indexOf("-"));

  return uuid;
}
