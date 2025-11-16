class Settings{
    static instance : Settings;
    private constructor(){

    }
    static getInstance():Settings{
        if(this.instance!=null){
         let instance = new Settings()
         return instance
        }
        return this.instance
    }
}
// const settings = new Settings()
const settings:Settings = Settings.getInstance()