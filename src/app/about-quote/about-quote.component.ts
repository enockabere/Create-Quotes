import { Component, OnInit, Input } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-about-quote',
  templateUrl: './about-quote.component.html',
  styleUrls: ['./about-quote.component.css']
})
export class AboutQuoteComponent implements OnInit {

  @Input() addQuote: MyQuotes;

  constructor() { }

  ngOnInit(): void {
  }

}
