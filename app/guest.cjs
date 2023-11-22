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

const updateGuest =(id,name,address,contact_no,visit_date)=>{
    const guests = loadGuests();
    const guestIndex = guests.findIndex((guest)=>{
        return guest.id ==id;
    });
    if(guestIndex!=-1){
        const guest = guests[guestIndex];
        guest.name = name ? name:guest.name;
        guest.address = address ? address:guest.address;
        guest.contact_no = contact_no ? contact_no:guest.contact_no;
        guest.visit_date = visit_date ? visit_date:guest.visit_date;
        console.log("Record Update",id);
        saveGuest(guests)
    }else{
        console.log(chalk.yellow.inverse("No Record Found!!"))
    }
    //console.log(guestIndex)
    //console.log(chalk.yellow.bold("Update",id));
}
const deleteGuest =(id)=>{
    const guests = loadGuests();
    const newGuests = guests.filter((guest)=>{
        return guest.id!=id;
    });
    if(guests.length>newGuests.length){
        saveGuest(newGuests);
        console.log(chalk.red.bold("Delete",id));
    }else{
        console.log(chalk.red.inverse("No Record Found!!"))
    }

}
const readGuest =(id)=>{
    const guests = loadGuests();
    const guest = guests.find((guest)=>{
        return guest.id ===id;
    });
    if(guest){
        console.log(chalk.red.bold("guest",id));
        console.log(guest);
    }else{
        console.log(chalk.red.bold.inverse('No record Found'));
    }

}

const listGuest =()=>{
    console.log(chalk.magenta.bold("Guest List"));
    const guests=loadGuests();
    guests.forEach((guests)=>{
        console.log(guests);
    })
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