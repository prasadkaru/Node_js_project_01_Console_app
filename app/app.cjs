//console input
 //import * as db from "./guest.cjs";
//import chalk from 'chalk';
const yargs = require("yargs");
const db= require("./guest.cjs");

//guest -id,name,address,contact_na,vist_date
yargs.version('1.1.2');

//add
yargs.command({
    command:'add',
    describe:'To add a guest',
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
        address:{
            describe:"Address",
            demandOption: true,
            type:"string"
        },
        contact_no:{
            describe:"Contact No",
            demandOption:true,
            type:"number"
        },
        visit_date:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
    },
    handler:function (argv){
        db.addGuest(
        argv.name
        );



    }
});

//update
yargs.command({
    command:'update',
    describe:'To update a guest',
    builder:{
      id:{
          describe:"ID",
          demandOption:true,
          type:"number"
      },
      name:{
          describe:"Name",
          type:"String"
      },
      address: {
          describe:"ADDRESS",
          type:"string"
      },
        contact_no:{
            describe:"Contact No",
            type:"number"
        },
        visit_date:{
            describe:"Name",
            type:"string"
        },

    },
    handler:function (argv){
        db.updateGuest(
            argv.id
        );
    }
})
 yargs.parse();
//console.log(yargs.argv)
// const command = process.argv;
// if (command[2]==='add'){
//     db.addGuest();
// }else if (command[2]==='update'){
//     db.updateGuest();
// }====>use module