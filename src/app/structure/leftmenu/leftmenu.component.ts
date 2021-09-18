import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  menuItems: MenuItem[]=[];
  rightClickMenuItems: MenuItem[]=[];
  constructor(){
  };
  ngOnInit(): void {
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
    this.rightClickMenuItems=[
        {label: 'Open'},
        {label: 'Open in new Tab', icon: 'pi pi-plus'}
    ];
  }

}
