/*------------------------------------ problem 1 */

/* let myAna = 1;
const result = anaToVori(myAna);
console.log(result);

function anaToVori (valueOfAna) {
    if(typeof valueOfAna != 'number' || valueOfAna <= 0){
        return('enter a vlaid and possative number')
    }
    let vori = valueOfAna * 0.0625;
    return vori;
}
 */
/*------------------------------------ problem 2 */

/* let sing = 2;
let samu = -3;
let jila = 6;

const output = pandaCost(sing, samu, jila);
console.log(output);


function pandaCost(singara, samuca, jilapi) {
    if ((typeof (singara) != 'number')||(typeof (samuca) != 'number')||(typeof (jilapi) != 'number')) {
        return ("name not allowed,enter number");
    }
    if ((singara >= 0 && singara < 20) && (samuca >= 0 && samuca < 20) && (jilapi >= 0 && jilapi < 20)) {
        // inial fixed singara, samuca nad jilapi price
        const perSingaraPrice = 7;
        const perSamucaPrice = 10;
        const perJilapiPrice = 15;
        // calculate price
        let totalPrice = (singara * perSingaraPrice) + (samuca * perSamucaPrice) + (jilapi * perJilapiPrice);
        return totalPrice;
    }
    else {
        return ('opps..! enter a vlaid number less then 0 and more then 20')
    }
} */

/*------------------------------------ problem 3 */


/* console.log(picnicBudget(-349));

function picnicBudget(participateNumber) {
    const under100PerPrice = 5000;
    const moreThen100Price = 4000;
    const over200Price = 3000;
    let totalCost = 0; 

    if(typeof participateNumber != 'number' || participateNumber <= 0){
        return('enter a vlaid and possative number')
    }

    if(participateNumber <= 100){
        const totalCostOfUnder100 = participateNumber * under100PerPrice;
        totalCost = totalCostOfUnder100;
    }
    if(participateNumber <= 200){
        let restPersonOf100 = participateNumber - 100;
        const previousCost = 100 *under100PerPrice;
        const totalCostOfUnder200 = restPersonOf100 * moreThen100Price;
        totalCost = previousCost + totalCostOfUnder200;
    }
    else{
        let restPersonOff200 = participateNumber - 200;
        const after200Cost = (100 * under100PerPrice) + (100 * moreThen100Price);
        const totalCostOfOver200 = restPersonOff200 * over200Price;
        totalCost = after200Cost + totalCostOfOver200;
    }
    return totalCost;
} */


/*------------------------------------ problem 4 */

const result = oddFriend(['pallob', 'redo', 'nasir', 'shaon', 'arif']);
console.log(result);

function oddFriend(names) {
    if(typeof(names) != 'object'){
        return ("enter a object");
    }
    let initialFriend = names[0];
    for(const name of names){
        if(name.length % 2 != 0){
            initialFriend = name;
            break;
        }
    }
    return initialFriend;
}
