//data save file

//console.log('db.js')

// const name ="prasad";
// const age = 24;
//import chalk from 'chalk';
const fs = require('fs');
const chalk = require('chalk')


//addguest updateguest deleteguest readguest listguest

const db_file = "data.json";
const addGuest =(name,address,contact_no,visit_date)=>{
    const guest=loadGuests();
    const lenght=guest.length;
    let id=1;
    if(lenght>0){
        id=guest[lenght-1].id+1;
    }
    guest.push({
        id:id,
        name:name,
        address:address,
        contact_no:contact_no,
        visit_date:visit_date
    });
    saveGuest(guest);
    console.log(chalk.green("data saved!"));
}

const updateGuest =(id,address,contact_no,visit_date)=>{
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

const saveGuest=(guests)=>{
    const dataJSON = JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJSON);
}

const loadGuests=()=>{
    try {
        const dataBuffer = fs.readFileSync(db_file);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e){
        return []
    }
};


module.exports={
    addGuest,updateGuest,deleteGuest,readGuest,listGuest
}