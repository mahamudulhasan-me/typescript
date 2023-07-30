class player {
  playerName: string;
  age: number;
  country: string;

  constructor(p: string, a: number, c: string) {
    this.playerName = p;
    this.age = a;
    this.country = c;
  }
}

const sakib = new player("Sakib", 25, "Bangladesh");
console.log(sakib);
console.log(sakib.age);
