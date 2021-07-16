export class MyQuotes {
    showQuoteDescription: boolean;

    constructor(public quoteId:number, public quoteTitle:string, public qDescription:string){
        this.showQuoteDescription = false;
    }
}
