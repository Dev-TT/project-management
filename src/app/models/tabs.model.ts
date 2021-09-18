export class Tab{
    // this is plain Typescript (no decorators)
    // you can use Vanilla typescript
    
    // Properties
    public name:string;
    public tabID: string;
    public active: boolean;

    constructor(name:string){
        // store the constructor parameters into the model properties

        this.name=name;
        this.active=true;
        
        var myDate = new Date();
        this.tabID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds() + "" + Math.random()*100;
        this.name=this.tabID;
    }
}
