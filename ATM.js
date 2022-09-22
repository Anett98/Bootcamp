// DO NOT TOUCH THIS PART

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const generateCardNumber = () => {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, _ => String(getRandomInt(9)));
};



class Card{
    cardNumber = generateCardNumber();

    constructor({name, surname, pinCode}) {
        this.name = name?this.name=name:new Error ('Name is not valid')
        this.surname=surname?this.surname=surname:new Error('surname is not valid')
        this.pinCode = (isNaN(+pinCode))?new Error('Pin is not valid'):this.pinCode=+pinCode
        this.moneyAmount = 0
    }
}

const card = new Card({
    name: 'John',
    surname: 'Smith',
    pinCode: 12345
}); 

console.log(card) 
console.log(card.number) 


class CardService{
    #cardList=[]

    static addCard(card){
       this.#cardList.push(card)
    }


    static removeCard(card){
    this.#cardList = this.#cardList.filter(item=>card.cardNumber!==item.cardNumber)
    }

    static async checkCardExistence(card){
        let res = this.#cardList.find(item=>item.cardNumber===card.cardNumber)
        if(res) {
            return true
        }
        return 'There is no card with these numbers'
    }

    static async addMoney(cardNumber, moneyAmount){
        this.#cardList = this.#cardList.map(item=>{
            if(item.cardNumber === cardNumber) {
                item.moneyAmount += moneyAmount
                     return item
            }
            return item
        })


    }


    static async removeMoney(cardNumber, amount){
        this.#cardList = this.#cardList.map(item=>{
            if(item.cardNumber === cardNumber) {
                if( item.moneyAmount>=amount) {
                 item.moneyAmount -= amount
                 return item
                } else {
                    throw new Error('Not enough money')
                }
            }
            return item
        })


    }

    static async transferFromTo(card, toCardNumber, amount){
         await this.checkCardExistence(toCardNumber)
         await this.removeMoney(card,amount)
         await this.addMoney(toCardNumber,amount)

       console.log('transferred successfully');

    }


}






//  ATM class is simple
// All methods are static

class ATM {
    static totalMoney = 500000;

    static refill(amount){
        CardService.addMoney(amount)
    }


     static async getMoney(card, amount){
        if(this.totalMoney>=amount) {
            await  CardService.checkCardExistence(card)
            await  CardService.removeCard(card.cardNumber,amount)

            console.log(`${amount} here, take your money`);
        } else {
            throw new Error ('There is not enough money in ATM')
        }
    }

}



// All methods are static


class Terminal{

    static async transferToCard(cardNumber, amount){
       await CardService.addMoney(cardNumber,amount)
       console.log('transferred successfully');
    }
}