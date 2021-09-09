class Car{
    model: string;
    price: number;
    private _milage:number;
    constructor(model: string, price: number) {
        console.log(model, price);
        this.model = model;
        this.price = price;
        this._milage = 10000;
    }
    getTotalPrice(tax: number):number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('Toyota-22', 2200000);
toyota.getTotalPrice(20);
console.log(toyota.getTotalPrice(20));
