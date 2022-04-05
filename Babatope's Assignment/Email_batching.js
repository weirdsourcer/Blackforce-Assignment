function grouping (User){
    let OddGroup = [];
    let EvenGroup = [];
    let UserID = User.USERID
    for (let i = 1; i <= User.length; i++){
        if (USERID % 2 === 0){
            EvenGroup.push(i);
        }
        else{
            OddGroup.push(i);
        }
    }

    console.log("Total Number of OddGroup = " + OddGroup.length)
    console.log("Total Number of EvenGroup = " + EvenGroup.length)
}