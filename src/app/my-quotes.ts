export class MyQuotes {
    showQuoteDescription: boolean;

    constructor(public quoteId:number, public quoteTitle:string, public qDescription:string, public publishDate:Date){
        this.showQuoteDescription = false;
    }
}
