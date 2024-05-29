"use strict";
function ahmed(friend) {
    console.log(`${friend} is my friend`);
}
ahmed('moiz');
let gussedList = ['moiz', 'ashar', 'sammer'];
let invitPerson = (oldGussedlist, newGussedlist) => {
    let index = gussedList.indexOf(oldGussedlist);
    if (index === -1) {
        console.log(`${oldGussedlist}is not aviblible`);
    }
    else {
        gussedList[index] = newGussedlist;
        console.log(`${oldGussedlist} nahi a sakta use ke jaga ${newGussedlist} ayga`);
    }
};
invitPerson('sameer', 'shahzaib');
