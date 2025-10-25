export default class engine{
    constructor(){
        this.count  = 0;

    }
    increment(){
        this.count++;
    }
    decrement(){
        this.count--;
    }
    reset(){
        this.count = 0;
    }
    getCount(){
        return this.count
    }
}

