export class Card{
    //PK
    cardName!:string;
    power?:number;
    toughness?:number;
    //FK cardName
    backside?:string;
    //FK cardName
    twoFace?:string;
    imageUrl!:string;
    convertedManaCost!:number;

    //Would need to seperate into different tables to be "standardized"
    //CardType
    type!:string[];
    //CardSubtype
    subtype?:string[];
    //CardCost
    cost?:[string, number][];
    optional?:[string,number][];
    //CardColorIdentity
    color!:string[];
    //CardPurpose
    purpose?:string[];
}