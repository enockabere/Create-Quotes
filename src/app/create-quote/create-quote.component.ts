import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote = new MyQuotes (0, "", "", new Date());
 @Output() addQuote = new EventEmitter <MyQuotes>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
