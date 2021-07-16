export class MyQuotes {
    quoteId : number;
    quoteTitle : string;
    qDescription: string;

    constructor(quoteId:number, quoteTitle:string, qDescription:string){
        this.quoteId = quoteId;
        this.quoteTitle = quoteTitle;
        this.qDescription = qDescription;
    }
}
