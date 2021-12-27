import { getBggCollection, getBggThing } from "bgg-xml-api-client";

const number_of_players = process.argv[2];

function getPrimaryName(item) {
  if (Array.isArray(item.name)) {
    return item.name.find((name) => name.type === "primary").value;
  } else {
    return item.name.value;
  }
}

const { data } = await getBggCollection({ username: "ezaretskiy" });

let ids = "";

for (let i = 0; i < data.item.length; i++) {
  ids = ids + data.item[i].objectid;
  if (i !== data.item.length - 1) {
    ids = ids + ",";
  }
}
const games = await getBggThing({
  type: "boardgame",
  id: ids,
});

let filteredGames = [];
for (let i = 0; i < games.data.item.length; i++) {
  if (
    games.data.item[i].maxplayers.value >= number_of_players &&
    games.data.item[i].minplayers.value <= number_of_players
  ) {
    filteredGames.push(games.data.item[i]);
  }
}

const randomGame =
  filteredGames[Math.floor(Math.random() * filteredGames.length)];

console.log(`Play: ${getPrimaryName(randomGame)}`);
