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
    builder:{
        title:{
            describe:"Note title ",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Note body ",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title + ', Body: ' + argv.body )
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

yargs.parse()
