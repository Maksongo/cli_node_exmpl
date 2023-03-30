import inquirer from "inquirer";
import fs from "fs";

let writeCssResault = (hex) => {
  fs.writeFileSync(
    "hello.css",
    `body {
    background: ${hex};
}`
  );
};

inquirer
  .prompt([
    {
      type: "list",
      name: "typeOfColor",
      message: "what color do u like? 😈",
      choices: ["red", "black", "white", "purple"],
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers.typeOfColor);

    switch (answers.typeOfColor) {
      case "red":
        writeCssResault("#fc0303");
        break;
      case "black":
        writeCssResault("#000000");
        break;
      case "white":
        writeCssResault("#ffffff");
        break;
      case "purple":
        writeCssResault("#b800d9");
        break;
    }
  });
