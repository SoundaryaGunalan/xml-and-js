const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

console.log(`Source:`);
console.log(personnel);

console.log(`-----------`);
console.log(`Step 1`);
console.log(`-----------`);

const jediPersonnel = personnel.filter((person) => {
  return person.isForceUser;
});
console.log(jediPersonnel);

console.log(`-----------`);
console.log(`Step 2`);
console.log(`-----------`);

const jediScores = jediPersonnel.map((jedi) => {
  return jedi.pilotingScore + jedi.shootingScore;
});
console.log(jediScores);

console.log(`-----------`);
console.log(`Step 3`);
console.log(`-----------`);

const totalJediScore_1 = jediScores.reduce((acc, score) => {
  return acc + score;
}, 0);
console.log(totalJediScore_1);

console.log(`-----------`);
console.log(`Chaining`);
console.log(`-----------`);

const totalJediScore_2 = personnel
  .filter((person) => {
    return person.isForceUser;
  })
  .map((jedi) => {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce((acc, score) => {
    return acc + score;
  }, 0);
console.log(totalJediScore_2);

const totalJediScore_3 = personnel
  .filter((person) => person.isForceUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
console.log(totalJediScore_3);
