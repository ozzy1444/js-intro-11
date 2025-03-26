const Player = require('./player');


class SuperPlayer extends Player{
    constructor(nickName, score) {
        super(nickName, score)
    }

    superAttack(superAttachedPlayer) {
        this.score += 2;
        superAttachedPlayer.score -= 2;
        
    }
}

module.exports = SuperPlayer