class Customer {
    constructor(name, money = 0, purchases = []) {
        this.name = name;
        this.money = money;
        this.purchases = purchases;
    }
    addFunds (num) {
        this.money += num;
    }
    withdrawFunds(num) {
        if (this.money - num < 0){
            throw new Error ("You do not have enough money to withdraw");
        }
        this.money -= num;
    }
}

try {
    module.exports = Customer;
  } catch {
    module.exports = null;
  }