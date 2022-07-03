const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageOfDragon = () => {
  return Math.floor(Math.random() * (`${dragon.strength}` - 15) + 15);
}

const damageOfWarrior = () => {
  const maxDamageWarrior = warrior.strength * warrior.weaponDmg;
  const minDamageWarrior = warrior.strength;
  const realDamageWarrior = Math.floor(Math.random() * (maxDamageWarrior - minDamageWarrior) + minDamageWarrior)
  return realDamageWarrior;

}

const costOfMage = () => {
  if (mage.mana < 15) {
    return `Não possui mana suficiente e a mana gasta é ${mage.mana}`;
  }
  const maxDamageMage = mage.intelligence * 2;
  const minDamageMage = mage.intelligence;

  const damageOfMage = Math.floor(Math.random() * (maxDamageMage - minDamageMage) + minDamageMage);
  const objMage = {
    dano: damageOfMage,
    costMana: 15
  }
  mage.mana = mage.mana - objMage.costMana;
  return objMage;
}

const gameActions = {
  warriorTurn(callback) {
    warrior.damage = callback;
    dragon.healthPoints = dragon.healthPoints - callback
    return this.warriorTurn;
  },

  mageTurn(callback) {
    mage.damage = callback.dano;
    dragon.healthPoints = dragon.healthPoints - callback.dano;
    return this.mageTurn;
  },

  dragonTurn(callback) {
    dragon.damage = callback;
    warrior.healthPoints = warrior.healthPoints - callback;
    mage.healthPoints = mage.healthPoints - callback;
    return this.dragonTurn;
  },

  playGame() {
    return battleMembers;
  }
};
//turno 1
gameActions.warriorTurn(damageOfWarrior());
gameActions.mageTurn(costOfMage());
gameActions.dragonTurn(damageOfDragon());
console.log(gameActions.playGame());

//turno 2
gameActions.warriorTurn(damageOfWarrior());
gameActions.mageTurn(costOfMage());
gameActions.dragonTurn(damageOfDragon());
console.log(gameActions.playGame());

//turno 3
gameActions.warriorTurn(damageOfWarrior());
gameActions.mageTurn(costOfMage());
gameActions.dragonTurn(damageOfDragon());
console.log(gameActions.playGame());




