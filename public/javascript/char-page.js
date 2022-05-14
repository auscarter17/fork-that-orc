
// global name arrays
const firstName = [
  'The Butcher',
  'Garrosh',
  'Austin'
];

const lastName = [
  "of Blaviken",
  'Hellscream',
  'Carter'
];

const warriorWeapon = [
  {
    name: "Steel Axe",
    rating: "5"
  },
  {
    name: "Dragontooth Hammer",
    rating: "10"
  }
];

const warriorArmor = [
  {
    name: "Iron Armor",
    rating: 4
  },
  {
    name: "Dragonscale Armor",
    rating: 10
  }
];

const rogueWeapon = [
  {
    name: "Iron Dagger",
    rating: 4
  },
  {
    name: "Corehound Tooth",
    rating: 10
  }
];

const rogueArmor = [
  {
    name: "Leather Armor",
    rating: 3
  },
  {
    name: "Gilded Armor",
    rating: 10
  }
];

const mageWeapon = [
  {
    name: "First Staff",
    rating: 6
  },
  {
    name: "Wabbajack",
    rating: 10
  }
];

const mageArmor = [
  {
    name: "Wizard Robes",
    rating: 4
  },
  {
    name: "Enchanted Robes",
    rating: 10
  }
]

let statObj = {};

// function to return a random name from both name arrays
// by using the randomInt function
function randomName() {

  const randomFirst = firstName[randomInt(firstName.length)];
  const randomLast = lastName[randomInt(lastName.length)];

  return randomFirst + " " + randomLast;
};

// simply returns a 'random' number
function randomInt(num) {
  return Math.floor(Math.random() * num);
};

// this function places a random name in the text area on the document
const randomNameHandler = (event) => {
  event.preventDefault();

  const nameArea = document.querySelector('input[name="charname"]');

  const name = randomName();

  nameArea.value = name;
};

// picks a random weapon from the class appropriate weapon array
const randomWepHandler = (event) => {
  event.preventDefault();

  const wepNameArea = document.querySelector('input[name="wepname"]');
  const wepRatingArea = document.querySelector('input[name="weprating"]');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case "warrior":
      var weapon = warriorWeapon[randomInt(warriorWeapon.length)];
      wepNameArea.value = weapon.name;
      wepRatingArea.value = weapon.rating;
      break;
    case "rogue":
      var weapon = rogueWeapon[randomInt(rogueWeapon.length)];
      wepNameArea.value = weapon.name;
      wepRatingArea.value = weapon.rating;
      break;
    case "mage":
      var weapon = mageWeapon[randomInt(mageWeapon.length)];
      wepNameArea.value = weapon.name;
      wepRatingArea.value = weapon.rating;
      break;
    default:
      break;
  }
};

// picks a random armor from the class appropriate armor array
const randomArmHandler = (event) => {
  event.preventDefault();

  const armNameArea = document.querySelector('input[name="armname"]');
  const armRatingArea = document.querySelector('input[name="armrating"]');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case "warrior":
      var armor = warriorArmor[randomInt(warriorArmor.length)];
      armNameArea.value = armor.name;
      armRatingArea.value = armor.rating;
      break;
    case "rogue":
      var armor = rogueArmor[randomInt(rogueArmor.length)];
      armNameArea.value = armor.name;
      armRatingArea.value = armor.rating;
      break;
    case "mage":
      var armor = mageArmor[randomInt(mageArmor.length)];
      armNameArea.value = armor.name;
      armRatingArea.value = armor.rating;
      break;
    default:
      break;
  }
}

// this function generates the stat rolls
const rollStatHandler = (event) => {
  event.preventDefault();

  // clearFields();

  const healthField = document.querySelector('input[name="health"]');
  const manaField = document.querySelector('input[name="mana"]');
  const strField = document.querySelector('input[name="str"]');
  const dexField = document.querySelector('input[name="dex"]');
  const intField = document.querySelector('input[name="int"]');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case 'warrior':
      var health = randomInt(100) + 50;
      var mana = randomInt(100);
      var str = randomInt(10) + 10;
      var dex = randomInt(10) + 5;
      var int = randomInt(10);
      break;
    case 'rogue':
      var health = randomInt(100) + 25;
      var mana = randomInt(100) + 25;
      var str = randomInt(10) + 5;
      var dex = randomInt(10) + 5;
      var int = randomInt(10) + 5;
      break;
    case 'mage':
      var health = randomInt(100);
      var mana = randomInt(100) + 50;
      var str = randomInt(10);
      var dex = randomInt(10) + 5;
      var int = randomInt(10) + 10;
      break;
    default:
      break;
  };

  statObj = {
    charClass: charClass,
    health: health,
    mana: mana,
    str: str,
    dex: dex,
    int: int
  };

  healthField.value = health;
  manaField.value = mana;
  strField.value = str;
  dexField.value = dex;
  intField.value = int;
};








document.querySelector('.name-btn').addEventListener('click', randomNameHandler);
document.querySelector('.roll-char').addEventListener('click', rollStatHandler);
document.querySelector('.wep-btn').addEventListener('click', randomWepHandler);
document.querySelector('.arm-btn').addEventListener('click', randomArmHandler);

