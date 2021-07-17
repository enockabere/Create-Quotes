import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  memes: MyQuotes [] = [
    new MyQuotes (1,'Enock Abere', 'Mambo Ya Stima', 'Mambo ya stima achia watu wa stima. Ntakufinya!', 'Isaac Newton', new Date(2021,6,1)),
    new MyQuotes (2,'Enock Abere', 'Life Hack', 'Ama niambie landlord nikae ile nyumba haina mtu kuliko ikae bure, ikipata mtu nihame', 'Isaac Newton',new Date(2021,6,2)),
    new MyQuotes (3,'Enock Abere', 'Kizangila', 'Omosh, this property is not for sale','Isaac Newton', new Date(2021,6,2)),
    new MyQuotes (4,'Enock Abere', 'Nduthi Guys', 'Weka simu kwa mfuko ukiona nduthi guys','Isaac Newton', new Date(2021,6,3))
  ]
  toggleDescription(index:any){
    this.memes[index].showQuoteDescription = !this.memes[index].showQuoteDescription;
  }
  removeQuote(qDelete:boolean, index:number){
    if (qDelete){
      let toDelete = confirm(`Do you want to Delete ${this.memes[index].quoteTitle}?`)
      if (toDelete){
      this.memes.splice(index,1);
      }
    }
  }
  addNewQuote(sasa:any){
    let quotelenght = this.memes.length;
    sasa.id = quotelenght+1;
    sasa.postDate = new Date (sasa.postDate)
    this.memes.push(sasa)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
