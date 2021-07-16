import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  memes: MyQuotes [] = [
    {quoteId:1, quoteTitle:'Mambo Ya Stima', qDescription: 'Mambo ya stima achia watu wa stima. Ntakufinya!'},
    {quoteId:2, quoteTitle:'Life Hack', qDescription: 'Ama niambie landlord nikae ile nyumba haina mtu kuliko ikae bure, ikipata mtu nihame'},
    {quoteId:1, quoteTitle:'Kizangila', qDescription:'Omosh, this property is not for sale'},
    {quoteId:1, quoteTitle:'Nduthi Guys', qDescription: 'Weka simu kwa mfuko ukiona nduthi guys'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
