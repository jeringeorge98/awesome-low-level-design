class HotDog{
constructor(
    public bread:string,
    public sausage : string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut? : boolean,
){

}
addKetchup(){
    this.ketchup = true
    return this
}
addSausage(sausageType:string){
    this.sausage = sausageType
    return this
}

addKraut(){
    this.kraut = true
    return this
}
addBread(bread:string){
    this.bread = bread;
}

}

const myLunch = new HotDog("bread1","sausage1")
.addKetchup()
.addKraut()


