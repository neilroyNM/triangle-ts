export class Triangle {
    private sideA: Number;
    private sideB: Number;
    private sideC: Number;
    
    public constructor(sideA: Number, sideB: Number, sideC: Number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    
    isEquilateral(isEquilateral: any): boolean {
        if(this.sideA == this.sideB && this.sideA == this.sideC
        && this.sideB == this.sideC){
            return true;
        }
        return false;
    }
}
