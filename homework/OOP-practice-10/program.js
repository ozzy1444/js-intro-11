const player = require('./player');
const SuperPlayer = require('./superPlayer');
const HeroPlayer = require('./heroPlayer');

const player1 = new player('Player 1', 5)
const player2 = new player('Player 2', 5)

const superPlayer = new SuperPlayer('super Player', 3);
const heroPlayer = new HeroPlayer('Hero Player', 10);


console.log(player1.getInfo()) // 5
console.log(player2.getInfo()) // 5
player1.attack(player2);
console.log(player1.getInfo()) // 6
console.log(player2.getInfo()) // 4

superPlayer.superAttack(player1);
superPlayer.superAttack(player2);
superPlayer.superAttack(heroPlayer);

heroPlayer.heal(player1);
heroPlayer.heal(player2);

player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);

player1.damage();
player2.damage();

const players = [player1, player2, superPlayer, heroPlayer];

for(const player of players) {
    console.log(`results ${player.getInfo()}`)
}

