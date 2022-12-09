const array = [20, 5, 15, 35, 10, 50, 80, 40];
const array2 = [20, 10, 5, 30, 60, 90, 40, 50];
const array3 = [20, 30, 40, 10, 5, 80, 100, 60];
const array4 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];



/////////////////////////////////ALGORITHM////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function buyAndSellAlgorithm (array) {
    //console.log('func');
    var amount = 0; //alınan yatırım gerecinin miktarı tutacak olan değişken
    var profit = 0; //o anki karı tutacak olan değişken
    var takenValue = 0; //satın alma işlemi yapılırkenki alış fiyatı
    var has = false; //o an kullanıcının elinde herhangi bir yatırım gerecinin olup olmadığı


    for (let i=0;i<array.length;i++) {
        if (i == array.length - 1) { //dizinin son elemanına ulaşılma durumu
            if (has) { //eğer son gün elimizde varlık varsa satmamız gerekir.
                profit += (array.at(i) - takenValue) * amount;
                has = false;
                break;
            }
            else break; //eğer son gün elimizde varlık yoksa herhangi bir işleme gerek yok
        }

        if (array.at(i) > array.at(i+1) && !has) continue; //eğer ertesi gün daha düşük bir değer varsa ve elimizde varlık yoksa
        //ertesi gün alım yapmak daha karlı olacağı için bugün alım yapmaya gerek yoktur.

        if (array.at(i) < array.at(i+1) && !has) {
            //eğer ertesi gün fiyatlar yükselecekse ve elimizde varlık yoksa, bugün alıp ertesi gün satmak karı artıracaktır.
            //dolayısıyla alım yapmak gerekir.
            has = true;
            if (profit == 0) amount = 1;
            else amount = profit / array.at(i);
            
            takenValue = array.at(i);
            continue;
        }

        if (array.at(i) > array.at(i+1) && has) {
            //eğer elimizde varlık varsa ve ertesi gün fiyatlar düşecekse halihazırda fiyatlar daha yüksekken satmak 
            //maksimum kazanç sağlayacaktır.
            has = false;
            profit += (array.at(i) - takenValue) * amount;
            continue;
        }

        if (array.at(i) < array.at(i+1) && has) {
            //eğer elimizde varlık varsa ve ertesi gün fiyatlar yükselecekse beklemek ve fiyatları o daha yüksek olan
            // fiyattan satmak karı daha fazla artıracaktır.
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