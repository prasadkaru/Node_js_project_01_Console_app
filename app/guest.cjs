//data save file

//console.log('db.js')

// const name ="prasad";
// const age = 24;
//import chalk from 'chalk';
const chalk = require('chalk')


//addguest updateguest deleteguest readguest listguest

const addGuest =(name)=>{
    console.log(chalk.green("Add",name));
}

const updateGuest =(id)=>{
    console.log(chalk.yellow.bold("Update",id));
}
const deleteGuest =(id)=>{
    console.log(chalk.red.bold("Delete",id));
}
const readGuest =(id)=>{
    console.log(chalk.green("Read",id));
}

const listGuest =(id)=>{
    console.log(chalk.blue.bold("list"),id);
}



module.exports={
    addGuest,updateGuest,deleteGuest,readGuest,listGuest
}