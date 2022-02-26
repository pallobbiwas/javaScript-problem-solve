/* ------------------Problem 1------------------ */
// let myAna = 16;
// const result = anaToVori(myAna);
// console.log(result);

// //----------------------function

// function anaToVori (valueOfAna) {
//     if(typeof valueOfAna != 'number' || valueOfAna <= 0){
//         return('enter a vlaid and possative number more then 0')
//     }
//     let vori = valueOfAna * 0.0625;
//     return vori;
// }

// /* ------------------Problem 2------------------ */ 

// let sing = 2;
// let samu = 2;
// let jila = 2;

// const output = pandaCost(sing, samu, jila);
// console.log(output);

// //-------------------function

// function pandaCost(singara, samuca, jilapi) {
//     if ((typeof (singara) != 'number')||(typeof (samuca) != 'number')||(typeof (jilapi) != 'number')) {
//         return ("name not allowed,enter number");
//     }
//     if ((singara >= 0 && singara < 20) && (samuca >= 0 && samuca < 20) && (jilapi >= 0 && jilapi < 20)) {
//         // inial fixed singara, samuca nad jilapi price
//         const perSingaraPrice = 7;
//         const perSamucaPrice = 10;
//         const perJilapiPrice = 15;
//         // calculate price
//         let totalPrice = (singara * perSingaraPrice) + (samuca * perSamucaPrice) + (jilapi * perJilapiPrice);
//         return totalPrice;
//     }
//     else {
//         return ('opps..! enter a vlaid number more then 0 and less then 20')
//     }
// }

// /* ------------------Problem 3------------------ */

console.log(picnicBudget(99));

//----------------------function

function picnicBudget(participateNumber) {
    const under100PerPrice = 5000;
    const moreThen100Price = 4000;
    const over200Price = 3000;
    let totalCost = 0; 

    if(typeof participateNumber != 'number' || participateNumber < 0){
        return('enter a possative number. Never enter a name')
    }
    // second 100
    
    //first 100
    if(participateNumber <= 100){
        const totalCostOfUnder100 = participateNumber * under100PerPrice;
        totalCost = totalCostOfUnder100;
    }
    else if(participateNumber <= 200){
        let restPersonOf100 = participateNumber - 100;
        const previousCost = 100 *under100PerPrice;
        const totalCostOfUnder200 = restPersonOf100 * moreThen100Price;
        totalCost = previousCost + totalCostOfUnder200;
    }
    //200 r besi
    else{
        let restPersonOff200 = participateNumber - 200;
        const after200Cost = (100 * under100PerPrice) + (100 * moreThen100Price);
        const totalCostOfOver200 = restPersonOff200 * over200Price;
        totalCost = after200Cost + totalCostOfOver200;
    }
    return totalCost;
}

// /* ------------------Problem 4------------------ */

/* const results = oddFriend(['pallob', 'redo', 'nasirchor', 'shaon', 'arif']);
console.log(results);

//--------------------function

function oddFriend(names) {
    if(typeof(names) != 'object'){
        return ("enter a array with your friend name");
    }
    let initialFriend = names[0];
    for(const name of names){
        if(name.length % 2 != 0){
            initialFriend = name;
            break;
        }
    }
    return initialFriend;
} */