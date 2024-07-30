export class Payment {
    public name: string;
    public amount: number;
    public code: string;
    public grid: string[][] = [];
    
    constructor(name: string, amount: number, code: string, grid: string[][]) {
        this.name = name;
        this.amount = amount;
        this.code = code;
        this.grid = grid;
    }
}
