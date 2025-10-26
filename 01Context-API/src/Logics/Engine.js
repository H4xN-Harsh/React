export default class Engine{
    constructor(count){
        this.count  = 0;

    }
    increment(){
        this.count++;
        return this.count
    }
    decrement(){
        this.count--;
        return this.count
    }
    reset(){
        this.count = 0;
        return this.count
    }
   
}

