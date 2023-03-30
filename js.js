import inquirer from "inquirer";
import fs from "fs";

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
        fs.writeFileSync(
          "hello.css",
          `body {
  background: #fc0303;
}`
        );
        break;
      case "black":
        fs.writeFileSync(
          "hello.css",
          `body {
  background: #000000;
}`
        );
        break;
      case "white":
        fs.writeFileSync(
          "hello.css",
          `body {
  background: #ffffff;
}`
        );
        break;
      case "purple":
        fs.writeFileSync(
          "hello.css",
          `body {
  background: #b800d9;
}`
        );
        break;
    }
  });
