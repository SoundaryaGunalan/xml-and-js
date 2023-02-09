const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

console.log(`Source:`);
console.log(pilots);

const { rebels, empire } = pilots.reduce(
  (acc, item) => {
    let type;
    if (item.faction === `Empire`) {
      type = `empire`;
    } else if (item.faction === `Rebels`) {
      type = `rebels`;
    }

    if (acc[type] && acc[type].length > 0) {
      acc[type] = acc[type] + ", " + item.name;
    } else {
      acc[type] = item.name;
    }

    return acc;
  },
  { rebels: "", empire: "" }
);

const names = rebels.map((item) => item.name).join(", ");

console.log(rebels, empire);
