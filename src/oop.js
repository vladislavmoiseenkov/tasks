const {
  HAMBURGER_BIG,
  HAMBURGER_SMALL,
  CHEESEBURGER_BIG,
  CHEESEBURGER_SMALL,
  SAUCE_MAYO,
  SAUCE_MUSTARD,
  SAUCE_TARTAR,
} = require('./constants');

class Burger {
  constructor(size) {

    this.price = size.price;
    this.calories = size.calories;
    this.sauces = new Set();
  }

  getPrice() {
    return this.price;
  };

  getCalories() {
    return this.calories;
  };

  addSauce(sauce) {
    this.sauces.add(sauce);
    this.price += sauce.price;
    this.calories += sauce.calories;
  };

  removeSauce(sauce) {
    if (this.sauces.has(sauce)) {
      this.sauces.delete(sauce);
      this.price -= sauce.price;
      this.calories -= sauce.calories;
    } else {
      throw new Error('Sauce not found!');
    }
  };
}

class Hamburger extends Burger {
  constructor(size)   {
    if (Hamburger.SIZES.has(size)) {
      super(size);
    }
  }

  static get SIZES() {
    return new Set([
        Hamburger.HAMBURGER_BIG,
        Hamburger.HAMBURGER_SMALL
      ]
    );
  }

  static get HAMBURGER_SMALL() {
    return HAMBURGER_SMALL;
  }

  static get HAMBURGER_BIG() {
    return HAMBURGER_BIG;
  }

  static get HAMBURGER_SAUCES() {
    return new Set([Hamburger.SAUCE_MAYO, Hamburger.SAUCE_MUSTARD]);
  };

  static get SAUCE_MAYO() {
    return SAUCE_MAYO;
  };
  static get SAUCE_MUSTARD() {
    return SAUCE_MUSTARD;
  };

  addSauce(sauce) {
    if (Hamburger.HAMBURGER_SAUCES.has(sauce)) {
      super.addSauce(sauce);
    } else {
      throw new Error('Invalid sauce');
    }
  }
}

class Cheeseburger extends Burger {
  constructor(size) {
    if (Cheeseburger.SIZES.has(size)) {
      super(size);
    } else {
      throw Error('Invalid size');
    }
  }

  static get SIZES() {
    return new Set([
        Cheeseburger.CHEESEBURGER_BIG,
        Cheeseburger.CHEESEBURGER_SMALL
      ]
    );
  }

  static get CHEESEBURGER_SMALL() {
    return CHEESEBURGER_SMALL;
  }

  static get CHEESEBURGER_BIG() {
    return CHEESEBURGER_BIG;
  }

  static get CHEESEBURGER_SAUCES() {
    return new Set([Cheeseburger.SAUCE_MAYO, Cheeseburger.SAUCE_MUSTARD, Cheeseburger.SAUCE_TARTAR]);
  };

  static get SAUCE_MAYO() {
    return SAUCE_MAYO;
  };
  static get SAUCE_MUSTARD() {
    return SAUCE_MUSTARD;
  };

  static get SAUCE_TARTAR() {
    return SAUCE_TARTAR;
  };

  addSauce(sauce) {
    if (Cheeseburger.CHEESEBURGER_SAUCES.has(sauce)) {
      super.addSauce(sauce);
    } else {
      throw Error('Invalid sauce');
    }
  }
}

const burger1 = new Hamburger(Hamburger.HAMBURGER_SMALL);
burger1.addSauce(Hamburger.SAUCE_MAYO);
burger1.addSauce(Hamburger.SAUCE_MUSTARD);

console.log(burger1.getPrice()); // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

console.log(burger1.getPrice()); // -> 35
console.log(burger1.getCalories()); // -> 235

const burger2 = new Cheeseburger(Cheeseburger.CHEESEBURGER_BIG);
burger2.addSauce(Cheeseburger.SAUCE_TARTAR);

console.log(burger2.getPrice()); // -> 77
console.log(burger2.getCalories()); // -> 437
