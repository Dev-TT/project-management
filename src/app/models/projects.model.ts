export class Project{


    // Properties
    public contractNo:string="";
    public projectNo:string="";
    public projectTitle:string="";
    public spa:string="";

    constructor(newProjectContract: string, newProjectNo: string, NewProjectTitle: string){
        this.contractNo = newProjectContract;
        this.projectNo = newProjectNo;
        this.projectTitle = NewProjectTitle;
        
    }
}