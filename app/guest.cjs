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
const deleteGuest =()=>{
    console.log(chalk.red.bold("Delete"));
}
const readGuest =()=>{
    console.log(chalk.green("Read"));
}

const listGuest =()=>{
    console.log(chalk.blue.bold("list"));
}



module.exports={
    addGuest,updateGuest,deleteGuest,readGuest,listGuest
}