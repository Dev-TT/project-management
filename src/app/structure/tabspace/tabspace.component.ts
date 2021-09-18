import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { TabsService } from 'src/app/services/tabs.service';
import { Tab } from '../../models/tabs.model';
import { TabComponent } from '../tabspaces/tab/tab.component';

@Component({
  selector: 'app-tabspace',
  templateUrl: './tabspace.component.html',
  styleUrls: ['./tabspace.component.css']
})
export class TabspaceComponent implements OnInit {
  menuItems: MenuItem[]=[];
  myTabs: Tab[]=[];

  constructor(private tabService:TabsService) { 
  }

  ngOnInit(): void {
    this.myTabs=this.tabService.myTabs;     //initialize the tabs (byRef)

    this.menuItems = [
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
  onAddTab(){
    this.tabService.addNewTab();
  }


  
}
