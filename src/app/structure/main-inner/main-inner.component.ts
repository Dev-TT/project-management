import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import { TabsService } from 'src/app/services/tabs.service';
import { Tab } from '../../models/tabs.model';
import { Project } from 'src/app/models/projects.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main-inner',
  templateUrl: './main-inner.component.html',
  styleUrls: ['./main-inner.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MainInnerComponent implements OnInit {
  @Input() tab:Tab;


  slideMenuItems: MenuItem[]=[];
  breadCrumbItems: MenuItem[]=[]; 
  serverName ="PredefinedName";
  myTabs: Tab[];
  
  //FilterTable
  projects: Project[]=[];
  project: Project;
  selectedProjects: Project[]=[];
  submitted: boolean=false;
  statuses: any[]=[];
  productDialog: boolean=false;

  tempList: any[]=[{contract: "10224", projectNo: "XXX1", projectTitle: "Project1", spa: "Juan"}, 
  {contract: "10224", projectNo: "XXX2", projectTitle: "Project2", spa: "Aadam"},
  {contract: "10240", projectNo: "XXX3", projectTitle: "Project3", spa: "Theron"}
];

  constructor(private tabsService: TabsService, private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private http: HttpClient
    ) { 
    this.myTabs=[];
    this.tab= new Tab('Starting Title');
    this.project=new Project("1","2","3");
    

  }

  ngOnInit(): void {
    this.myTabs=this.tabsService.myTabs;      //initializing from Service (ByRef)
    //console.log("Main Inner Constructor: ");
    //console.log(this.myTabs);
    this.getProjects();

    this.breadCrumbItems = [
      {label:'Categories', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Sports', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Football', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Countries', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Spain', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'F.C. Barcelona', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Squad', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
  ];
    this.slideMenuItems = [
      {
          label: 'Files',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'} 
          ]
      }
  ];

  this.statuses = [
    {label: 'INSTOCK', value: 'instock'},
    {label: 'LOWSTOCK', value: 'lowstock'},
    {label: 'OUTOFSTOCK', value: 'outofstock'}
  ];  
  this.projects.push(new Project("c1", "p1", "#1111"));
  this.projects.push(new Project("c1", "p2", "#2222"));
  this.projects.push(new Project("c2", "p3", "#3333"));
  }



  onUpdateText(event:any){
    console.log(event);   // to be logged on the Browser Log!
                          // Under: event.target.value
  }
  searchText(){
    console.log("Clicked: " + this.serverName);
    console.log("Inner myTabs:");
    console.log(this.myTabs);
    console.log("Service myTabs:");
    console.log(this.tabsService.myTabs);
    this.myTabs=this.tabsService.myTabs;
  }
  openNew(){
    this.project = new Project("","","");
    this.submitted = false;
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}
  deleteSelectedProducts(){}

  saveProduct(){
    this.projects.push(this.project);
    
    this.http.post("https://angulartraining-9f739-default-rtdb.firebaseio.com/posts.json",this.project).subscribe( responseData=> {
      console.log(responseData);
    });
    this.productDialog = false;
    this.project = new Project("","","");
    
  }
  getProjects(){
    this.http.get("https://angulartraining-9f739-default-rtdb.firebaseio.com/posts.json").subscribe(projects=>{
      console.log('withouth pipe:');
      
      console.log(projects);
    })
    
    this.http.get("https://angulartraining-9f739-default-rtdb.firebaseio.com/posts.json").pipe(map((responseData:any) => {
      const projectsArray: string[]=[];
      console.log("now will start the for:");	
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
          //aaa="2";
          //responseData[key];
          console.log(key);
          projectsArray.push({...responseData[key], id: key });
        }
      }
      return (projectsArray);
    })).subscribe(projects=>{
      console.log('with pipe:');

      console.log(projects);
    })
  }
  


}


