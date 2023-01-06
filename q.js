const array = [20, 5, 15, 35, 10, 50, 80, 40];
const array2 = [20, 10, 5, 30, 60, 90, 40, 50];
const array3 = [20, 30, 40, 10, 5, 80, 100, 60];
const array4 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];



/////////////////////////////////ALGORITHM////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function buyAndSellAlgorithm (array) {
    //console.log('func');
    var amount = 0;
    var profit = 0;
    var takenValue = 0;
    var has = false;


    for (let i=0;i<array.length;i++) {
        if (i == array.length - 1) {
            if (has) {
                profit += (array.at(i) - takenValue) * amount;
                has = false;
                break;
            }
            else break;
        }

        if (array.at(i) > array.at(i+1) && !has) continue;

        if (array.at(i) < array.at(i+1) && !has) {
            has = true;
            if (profit == 0) amount = 1;
            else amount = profit / array.at(i);
            
            takenValue = array.at(i);
            continue;
        }

        if (array.at(i) > array.at(i+1) && has) {
            has = false;
            profit += (array.at(i) - takenValue) * amount;
            continue;
        }

        if (array.at(i) < array.at(i+1) && has) {
            continue;
        }
    }

    return profit;
}
/////////////////////////////////ALGORITHM////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////



console.log(buyAndSellAlgorithm(array));
console.log(buyAndSellAlgorithm(array2));
console.log(buyAndSellAlgorithm(array3));
console.log(buyAndSellAlgorithm(array4));
