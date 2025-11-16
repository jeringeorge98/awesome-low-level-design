type Listener = (data: any)=> void;

class ApiObserver{

private listeners:Listener[]=[];

// subscribe
subscribe(listener: Listener){
    this.listeners.push(listener)
}
unsubscribe(listener: Listener){
    this.listeners = this.listeners.filter(l=>l!=listener);
}
notify(data:any){
    this.listeners.forEach(listener=> listener(data));
}
async pollAPI(){
    setInterval(async () =>{
        const res = await fetch("")
        const data = res.json()
        this.notify(data);
    },5000)
}
}