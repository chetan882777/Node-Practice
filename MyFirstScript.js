const chalk = require("chalk")
const sum = require("./utils")

const result = sum(1, 3)

console.log(result)

console.log(chalk.inverse.green("success"))