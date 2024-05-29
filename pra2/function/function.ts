function ahmed(friend:any){
    console.log(`${friend} is my friend`);

}
ahmed('moiz');

let gussedList:string[]=['moiz','ashar','sammer']


let invitPerson=(oldGussedlist:string,newGussedlist:string) :void=>{
    let index=gussedList.indexOf(oldGussedlist);
    if(index ===-1){
        console.log(`${oldGussedlist}is not aviblible`);
    }else{
        gussedList[index]= newGussedlist
        console.log(`${oldGussedlist} nahi a sakta use ke jaga ${newGussedlist} ayga`);
    }
}
invitPerson('sameer','shahzaib');