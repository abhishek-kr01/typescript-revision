// class Chai {
//     flavour: string;
//     price: number;

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour;
//     //     this.price = price;
//     // }

//     constructor(flavour: string) {
//         this.flavour = flavour;
//         console.log(this);

//     }
// }

// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "Masala"


class Chai {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients // ok
    }

}

class Shop {
    protected shopName = "Chai Corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName //ok
    }
}

class Walet {
    #balance = 100;

    getBalance() {
        return this.#balance;
    }
}

const W = new Walet()

class Cup {
    readonly capacity: number = 250;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

class MordernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too sweet");
        this._sugar = value;
    }
}

const c = new MordernChai()
c.sugar = 3;

class EkChai {
    static shopName = "Chai Caffe"

    constructor(public flavour: string) { }
}

console.log(EkChai.shopName);

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make(): void {
        console.log("Brewing Chai");
    }
}

class Heater {
    heat() { }
}

class ChaiMaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat
    }
}