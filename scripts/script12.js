function Hamburger(size, stuff) {
    if (arguments.length !== 2)
        throw new Error("Constructor must have two arguments");
    if (size !== Hamburger.SIZE_SMALL && size !== Hamburger.SIZE_BIG)
        throw new Error("HamburgerException: invalid size");
    if (stuff !== Hamburger.STUFFING_CHEESE && stuff !== Hamburger.SALAD && stuff !== Hamburger.POPATOES)
        throw new Error("HamburgerException: invalid stuff");
    this.size = size;
    this.stuff = stuff;
    this.topping = {
        price: 0,
        calories: 0
    };
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
};
Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40
};
Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20
};
Hamburger.SALAD = {
    price: 20,
    calories: 5
};
Hamburger.POPATOES = {
    price: 15,
    calories: 10
};
Hamburger.TOPPING_MAYO = {
    price: 15,
    calories: 0
};
Hamburger.TOPPING_SAUCE = {
    price: 20,
    calories: 5
};

// методы в прототипе
Hamburger.prototype.addTopping = function(addition) {
    if (this.topping === addition)
        throw new Error("HamburgerException: duplicate topping");
    else
        this.topping = addition;
};

Hamburger.prototype.calculateCalories = function() {
    return "Calories: " + (this.size.calories + this.stuff.calories + this.topping.calories);
};

Hamburger.prototype.calculatePrice = function() {
    return "Price: " + (this.size.price + this.stuff.price + this.topping.price);
};

function MyHamburger() {
    var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    var result = hamburger.calculatePrice() + ", " + hamburger.calculateCalories();
    window.utils.writeResult(resultBlock12, result);
}

function MyHamburger_Check(){
  var hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  var result = hamburger.calculatePrice() + ", " + hamburger.calculateCalories();;
  window.utils.writeResult(resultBlock12, result);
}
