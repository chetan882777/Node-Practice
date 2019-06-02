const chalk = require("chalk")
const sum = require("./utils")
const yargs = require("yargs")

const result = sum(1, 3)

console.log(result)

console.log(chalk.red("success"))

yargs.version("1.1.0")

yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function(){
        console.log("Adding a new note!")
    } 
})

yargs.command({
    command: "remove",
    describe: "Romove a note",
    handler: function(){
        console.log("Removing a note!")
    } 
})

yargs.command({
    command: "list",
    describe: "List the notes",
    handler: function(){
        console.log("Listing note!")
    } 
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function(){
        console.log("Reading note!")
    } 
})

console.log(yargs.argv)
