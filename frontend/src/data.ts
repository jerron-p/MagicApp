import { Card } from "./app/shared/models/Card";

export const sample_cards: Card[] = [
    {
        cardName:"Oxidda Finisher",
        abilityText:["Affinity for Equipment"],
        power: 7,
        toughness: 5,
        imageUrl: '/assets/cardImg/oxiddaFinisher.jpg',
        convertedManaCost: 7,
        type: ['Creature'],
        subtype: ['Ogre', 'Rebel'],
        cost: [["Red",2],['Grey',5]],
        ability: ['Trample'],
        color: ['Red'],
        purpose: ["Offense"]
    },
    {
        cardName:"Pyromatics",
        abilityText:["Replicate 1(grey)1(red)","Pyromatics deals 1 damage to target creature or player"],
        imageUrl: '/assets/cardImg/pyromatics.jpg',
        convertedManaCost: 2,
        type: ['Instant'],
        cost: [["Red",1],['Grey',1]],
        color: ['Red'],
        purpose: ["Poke"]
    },
    {
        cardName:"Resistance Skywarden",
        power: 5,
        toughness: 5,
        imageUrl: '/assets/cardImg/resistanceSkywarden.jpg',
        convertedManaCost: 5,
        type: ['Creature'],
        subtype: ['Ogre', 'Rebel'],
        cost: [["Red",2],['Grey',3]],
        ability: ['Reach','Menace'],
        color: ['Red'],
        purpose: ['Defense']
    },
    {
        cardName:"Toymaker",
        abilityText:["1(grey), tap, Discard a card from your hand: Target noncreature artifact becomes an artifact creature with power and toughness each equal to its converted mana cost until end of turn. (It retains its abilities.)"],
        power: 1,
        toughness: 1,
        imageUrl: '/assets/cardImg/toymaker.jpg',
        convertedManaCost: 2,
        type: ['Creature', 'Artifact'],
        subtype: ['Spellshaper'],
        cost: [['Grey',2]],
        color: ['Colorless'],
        purpose: ['Artificer']
    },
    {
        cardName:"Bladehold War-Whip",
        abilityText:["For Mirrodin!", "Equip abilities you activate of other Equipment cost 1(grey) less to activate.", "Equipped creature has double strike.","Equp 3(grey)1(red)1(white)"],
        imageUrl: '/assets/cardImg/bladeholdWar-Whip.jpg',
        convertedManaCost: 3,
        type: ['Artifact'],
        subtype: ['Equipment'],
        cost: [["Grey",1],['Red',1],["White",1]],
        color: ['Red','White'],
        purpose: []
    },
    {
        cardName:"Orzhov Guildgate",
        abilityText:["Orzhov Guildgate enters the battlefield tapped.", "Tap: Add 1(white) or 1(black)"],
        imageUrl: '/assets/cardImg/orzhovGuildgate.jpg',
        convertedManaCost: 0,
        type: ['Land'],
        subtype: ['Gate'],
        color: ['White','Black'],
        purpose: ['Mana']
    },
    {
        cardName:"Mnemonic Nexus",
        abilityText:["Each player shuffles his or her graveyard into his or her library."],
        imageUrl: '/assets/cardImg/mnemonicNexus.jpg',
        convertedManaCost: 4,
        type: ['Instant'],
        cost: [["Grey",3],['Blue',1]],
        color: ['Blue'],
        purpose: []
    },
]