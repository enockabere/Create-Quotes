import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  memes: MyQuotes [] = [
    new MyQuotes (1, 'Mambo Ya Stima', 'Mambo ya stima achia watu wa stima. Ntakufinya!'),
    new MyQuotes (2, 'Life Hack', 'Ama niambie landlord nikae ile nyumba haina mtu kuliko ikae bure, ikipata mtu nihame'),
    new MyQuotes (3, 'Kizangila', 'Omosh, this property is not for sale'),
    new MyQuotes (4, 'Nduthi Guys', 'Weka simu kwa mfuko ukiona nduthi guys')
  ]
  toggleDescription(index:any){
    this.memes[index].showQuoteDescription = !this.memes[index].showQuoteDescription;
  }
  removeQuote(qDelete:boolean, index:number){
    if (qDelete){
      this.memes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
