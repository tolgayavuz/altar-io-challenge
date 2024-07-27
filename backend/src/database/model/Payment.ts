export class Payment {
    public name: string;
    public amount: number;
    public grid: string[][] = [];
    constructor(name: string, amount: number, grid: string[][]) {
        this.name = name;
        this.amount = amount;
        this.grid = grid;
    }
}
