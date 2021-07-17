export class MyQuotes {
    showQuoteDescription: boolean;
    constructor(public quoteId:number, public owner:string, public quoteTitle:string, public qDescription:string, public author:string, public completeDate:Date){
        this.showQuoteDescription = false;
    }  
}
