import { getBggCollection, getBggThing } from 'bgg-xml-api-client';

const number_of_players = process.argv[2]

function getPrimaryName(item) {
    if (Array.isArray(item.name)) {
        return item.name.find(name => name.type === 'primary').value
    } else {
        return item.name.value
    }
}

async function run() {
    const { data } = await getBggCollection({ username: 'ezaretskiy' });

    const games = await getBggThing({ type: 'boardgame', id: data.item.map(thing => thing.objectid).join(',') })
    const filteredGames = games.data.item.filter(item => item.maxplayers.value >= number_of_players && item.minplayers.value <= number_of_players)
    const randomGame = filteredGames[Math.floor(Math.random() * (filteredGames.length))]

    console.log(`Play: ${getPrimaryName(randomGame)}`)
}

run().then(()=>{}).catch((e)=>console.error(e))