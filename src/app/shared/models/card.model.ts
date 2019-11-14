export enum CardType {
  Question,
  One,
  Two,
  Three,
  Five,
  Eight,
  Thirteen,
  Twenty,
  Hundred,
  Infinity
}

export interface ICard {
  id: any; // TODO: rever
  type: CardType;
}
