export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Meteor-Man",
            power: "Summons meteors"
        },
        {
            id: 2,
            name: "Glue-Guy",
            power: "Makes objects sticky"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}