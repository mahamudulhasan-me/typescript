var player = /** @class */ (function () {
    function player(p, a, c) {
        this.playerName = p;
        this.age = a;
        this.country = c;
    }
    return player;
}());
var sakib = new player("Sakib", 25, "Bangladesh");
console.log(sakib);
