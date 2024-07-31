export class Payment {
    name: string;
    amount: number;
    code: string;
    grid: string[][] = [];
    size: number = 0;

    constructor(name: string, amount: number, code: string, grid: string[][]) {
        this.name = name;
        this.amount = amount;
        this.grid = grid;
        this.code = code;
        this.size = this.getSize();
    }

    getSize(): number {
        let size = 0;

        for (let row of this.grid) {
            for (let element of row) {
                size += element.length;
            }
        }

        return size;
    }
}
