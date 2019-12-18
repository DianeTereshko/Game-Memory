import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Status, IStatus, Card, ICard } from "../../models/card";
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-memorytest',
  templateUrl: './memorytest.component.html',
  styleUrls: ['./memorytest.component.scss']
})
export class MemorytestComponent implements OnInit, DoCheck {
  // Коунтер
  @ViewChild('countdown', { static: false }) private counter: CountdownComponent;
  doCheckCounter = 0;
  stopConfig: CountdownConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  config: CountdownConfig = { leftTime: 10, notify: [2, 5] };
  // Карточки
  cards: Array<ICard>;
  cards2: Array<ICard>;
  // Работа с карточками
  currentCardId: number;
  previousCardId: number;
  isFirstClick: boolean;
  isCardClick: boolean;
  isCardClick2: boolean;

  constructor() { }

  ngOnInit() {
    let cards: Array<ICard> = [];
    let card: ICard = new Card;
    card.id = 1;
    card.name = "account_balance";
    let card2: ICard = new Card;
    card2.id = 2;
    card2.name = "add_shopping_cart";
    let card3: ICard = new Card;
    card3.id = 3;
    card3.name = "android";
    let card4: ICard = new Card;
    card4.id = 4;
    card4.name = "alarm_on";
    let card5: ICard = new Card;
    card5.id = 5;
    card5.name = "card_travel";
    let card6: ICard = new Card;
    card6.id = 6;
    card6.name = "credit_card";
    let card7: ICard = new Card;
    card7.id = 7;
    card7.name = "euro_symbol";
    let card8: ICard = new Card;
    card8.id = 8;
    card8.name = "face";
    let card9: ICard = new Card;
    card9.id = 9;
    card9.name = "favorite_border";
    let card10: ICard = new Card;
    card10.id = 10;
    card10.name = "help_outline";
    let card11: ICard = new Card;
    card11.id = 11;
    card11.name = "history";
    let card12: ICard = new Card;
    card12.id = 12;
    card12.name = "hourglass_empty";
    let card13: ICard = new Card;
    card13.id = 13;
    card13.name = "important_devices";
    let card14: ICard = new Card;
    card14.id = 14;
    card14.name = "lightbulb_outline";
    let card15: ICard = new Card;
    card15.id = 15;
    card15.name = "toll";
    let card16: ICard = new Card;
    card16.id = 16;
    card16.name = "phonelink_lock";
    let card17: ICard = new Card;
    card17.id = 17;
    card17.name = "attach_money";
    let card18: ICard = new Card;
    card18.id = 18;
    card18.name = "insert_emoticon";

    cards.push(
      card, card2, card3, card4, card5, card6,
      card7, card8, card9, card10, card11, card12,
      card13, card14, card15, card16, card17, card18,
    );
    this.cards = cards;

    let cards2: Array<ICard> = [];
    let card19: ICard = new Card;
    card19.id = 1;
    card19.name = "account_balance";
    let card20: ICard = new Card;
    card20.id = 2;
    card20.name = "add_shopping_cart";
    let card21: ICard = new Card;
    card21.id = 3;
    card21.name = "android";
    let card22: ICard = new Card;
    card22.id = 4;
    card22.name = "alarm_on";
    let card23: ICard = new Card;
    card23.id = 5;
    card23.name = "card_travel";
    let card24: ICard = new Card;
    card24.id = 6;
    card24.name = "credit_card";
    let card25: ICard = new Card;
    card25.id = 7;
    card25.name = "euro_symbol";
    let card26: ICard = new Card;
    card26.id = 8;
    card26.name = "face";
    let card27: ICard = new Card;
    card27.id = 9;
    card27.name = "favorite_border";
    let card28: ICard = new Card;
    card28.id = 10;
    card28.name = "help_outline";
    let card29: ICard = new Card;
    card29.id = 11;
    card29.name = "history";
    let card30: ICard = new Card;
    card30.id = 12;
    card30.name = "hourglass_empty";
    let card31: ICard = new Card;
    card31.id = 13;
    card31.name = "important_devices";
    let card32: ICard = new Card;
    card32.id = 14;
    card32.name = "lightbulb_outline";
    let card33: ICard = new Card;
    card33.id = 15;
    card33.name = "toll";
    let card34: ICard = new Card;
    card34.id = 16;
    card34.name = "phonelink_lock";
    let card35: ICard = new Card;
    card35.id = 17;
    card35.name = "attach_money";
    let card36: ICard = new Card;
    card36.id = 18;
    card36.name = "insert_emoticon";

    cards2.push(
      card19, card20, card21, card22, card23, card24,
      card25, card26, card27, card28, card29, card30,
      card31, card32, card33, card34, card35, card36,
    );
    this.cards2 = cards2;

    let currentCardId: number;
    this.currentCardId = currentCardId;
    let previousCardId: number;
    this.previousCardId = previousCardId;
    let isFirstClick: boolean = false;
    this.isFirstClick = isFirstClick;
    let isCardClick: boolean = true;
    this.isCardClick = isCardClick;
    let isCardClick2: boolean = true;
    this.isCardClick2 = isCardClick2;

  }

  trackByFn = (index, item) => {
    // console.log(index);
    // console.log(item);
    // console.log(this.cards[index]);
  }

  cardClick = (item: ICard, cards: Array<ICard>): any => {

    // todo Запомниниание предыдущей карты
    if (!this.isFirstClick) {
      this.previousCardId = item.id;
      this.isFirstClick = true;
    }

    // todo запомнание только что кликнувшей карты
    if (this.isFirstClick) {
      this.currentCardId = item.id;
    }

    // console.log(this.currentCardId);
    // console.log(this.previousCardId);

    // todo Определить к какой из карт отностися и пометить на удаление
    if (this.cards == cards) {
      console.log("Crads1");
      this.isCardClick = !this.isCardClick;

      this.cards.find(card => card.id == item.id).status.todelete = true;
      this.cards.find(card => card.id == item.id).status.isVisible = true;
      // todo Снять пометку на удаление по истечении 5 секунд
      setTimeout(() => {
        this.cards.find(card => card.id == item.id).status.todelete = false;
        this.cards.find(card => card.id == item.id).status.isVisible = false;
      }, 4000);
    }
    // todo Определить к какой из карт отностися и пометить на удаление
    if (this.cards2 == cards) {
      console.log("Crads2");
      this.isCardClick2 = !this.isCardClick2;

      this.cards2.find(card => card.id == item.id).status.todelete = true;
      this.cards2.find(card => card.id == item.id).status.isVisible = true;

      // todo Снять пометку на удаление по истечении 5 секунд
      setTimeout(() => {
        this.cards2.find(card => card.id == item.id).status.todelete = false;
        this.cards2.find(card => card.id == item.id).status.isVisible = false;
      }, 4000);
    }

    // todo Удалить сопадающие элменты карт
    if (this.cards.find(card => card.id == item.id).status.todelete && this.cards2.find(card => card.id == item.id).status.todelete) {
      console.log("Удаляем обе карты");
      this.cards.find(card => card.id == item.id).status.deleted = true;
      this.cards2.find(card => card.id == item.id).status.deleted = true;
      this.previousCardId = null;
      this.currentCardId = null;
    }

    // console.log(this.cards);
    // console.log(this.cards2);
    return this.cards, this.cards2;
  }

  resetStop() {
    this.stopConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  }

  resetTimer() {
    this.counter.restart();
  }

  handleEvent(e: CountdownEvent) {
    console.log(e);
    console.log('timer stoped');
  }

  ngDoCheck() {
    console.log(this.doCheckCounter++);
  }
}
