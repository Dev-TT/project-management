import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { TabsService } from './services/tabs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TabsService]
})
export class AppComponent implements OnInit {
  title = 'primenewtest';
  items1: MenuItem[]=[];
  paneltoggle: boolean=false;

  constructor(private tabService: TabsService){
  };

  ngOnInit() {
    this.items1 = [
        {
            label: 'File',
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
    
}

    togglePanel(){
        this.paneltoggle=!this.paneltoggle;
        console.log(this.paneltoggle);
    }
}