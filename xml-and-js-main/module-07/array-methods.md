# Array methods

## .map()

Is used to convert one array into another. In other words to map values of one array onto another.

For example you have array

```js
const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
```

and you need to get array of ids. so the final array would be

```js
[20, 24, 56, 88];
```

This can be achived by using `.forEach`, `.for(..of)`, or just `.for()`. E.g

```js
const officersIds = [];
officers.forEach((officer) => {
  officersIds.push(officer.id);
});
```

But all these `for` methods only itterate through array and do not return anything. While `.map()` returns array.

```js
const officersIds = officers.map((officer) => {
  return officer.id;
});
```

**Note**: Keep in mind that the resulting array will always be the same length as the original array.

## .filter()

Is used to filter some elements out of the array.

For example, this is our source

```js
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
```

And we need to get an array with empire pilots only. This when we use `.filter()`

```js
const empire = pilots.filter((pilot) => pilot.faction === "Empire");
```

Basically, if the callback function returns true, the current element will be in the resulting array. If it returns false, it won’t be.

## .reduce()

Also itterates through array, but also passes the result of the callback.

The accumulator can be pretty much anything (integer, string, object, etc.) and must be instantiated or passed when calling .reduce().

For example, we have same array of pilots

```js
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
```

and we need to get 2 arrays - one with empire pilots, and one with rebels. There a couple of ways we can do that

We can use filter twice:

```js
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire = pilots.filter((pilot) => pilot.faction === "Empire");
```

But the problem here is that we itterate through array twice. And if array gets bigger, the time will grow exponentially.

Instead we can use `.reduce()` and go thorugh array only once.

```js
const { rebels, empire } = pilots.reduce(
  (accum, pilot) => {
    if (pilot.faction === "Rebels") {
      accum.rebels.push(pilot);
    } else if (pilot.faction === "Empire") {
      accum.empire.push(pilot);
    }

    return accum;
  },
  { rebels: [], empire: [] }
);
```

Another exmaple for `.reduce()`

```js
const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];
```

and we need to get total years of experience

```js
const totalYears = pilots.reduce((accum, pilot) => {
  return accum + pilot.years;
}, 0);
```

Using .reduce() is an easy way to generate a single value or object from an array.

## Combining .map(), .reduce(), and .filter()

```js
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
```

Our objective is to get the total score of force users only.

Step 1: filter out whho cannot use force

```js
const jediPersonnel = personnel.filter((person) => {
  return person.isForceUser;
});
```

Step 2: get total score for each force user

```js
const jediScores = jediPersonnel.map((jedi) => {
  return jedi.pilotingScore + jedi.shootingScore;
});
```

Step 3: reduce to the total

```js
const totalJediScore = jediScores.reduce((acc, score) => {
  return acc + score;
}, 0);
```

Since each function returns array, we can chain them into single call

```js
const totalJediScore = personnel
  .filter((person) => {
    return person.isForceUser;
  })
  .map((jedi) => {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce((acc, score) => {
    return acc + score;
  }, 0);
```

and since we just return results in callbacks, we can make it shorter even more

```js
const totalJediScore = personnel
  .filter((person) => person.isForceUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
```
