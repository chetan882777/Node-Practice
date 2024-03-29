const fs = require("fs")

    // const dataBuffer = fs.readFileSync('1-json.json')
    // const dataJson = dataBuffer.toString()
    // const user = JSON.parse(dataJson)

    // user.name = "Andrew"
    // user.age = 27

    // const userJson = JSON.stringify(user)

    // fs.writeFileSync('1-json.json', userJson)


const notes = require('./notes')

const yargs = require("yargs")

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
        notes.addNote(argv.title, argv.body)
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