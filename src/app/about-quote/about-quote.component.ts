import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-about-quote',
  templateUrl: './about-quote.component.html',
  styleUrls: ['./about-quote.component.css']
})
export class AboutQuoteComponent implements OnInit {

  @Input() addQuote: MyQuotes;
  @Output() qDelete = new EventEmitter <boolean> ();

  deleteQuote (y:boolean){
    this.qDelete.emit(y);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
