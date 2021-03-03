class Purse {
    constructor(
        name,
        color,
        strapLength,
        strapAdjusted
    ) {
        // Properties are defined
        this.name = name;
        this.color = color;
        this.strapLength = strapLength;
        this.strapAdjusted = strapAdjusted;
    }
    adjustStrap (ajusted){
        this.strapAdjusted = ajusted;
    }
    checkStrp(newLength){
        this.strapLength = newLength;
        if (myPurse.strapLength < 24) {
            console.log("it got shorter!",myPurse.strapLength);
            myPurse.strapAdjusted = true;
        }else if (myPurse.strapLength > 24){
            console.log("it got longer!",myPurse.strapLength);
            myPurse.strapAdjusted = true;
            
        }else{
            myPurse.strapAdjusted = false;
        }
    }
}
export default Purse;
