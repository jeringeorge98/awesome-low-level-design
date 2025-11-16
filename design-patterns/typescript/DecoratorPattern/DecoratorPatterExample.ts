interface ApiService{
    fetchData(url:String): Promise<any>
}

class RealApiService implements ApiService{
    async fetchData(url:string){
        const response = await fetch(url)
        return response.body
    }
}
class LoggingDecorator implements ApiService{
    constructor(private service :ApiService){
    this.service = service    
    }
    fetchData(url: String): Promise<any> {
       const response =  this.service.fetchData(url)
        return response
    }

}

const api = new LoggingDecorator(new RealApiService());
api.fetchData("some url");
