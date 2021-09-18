import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
  
  topMenuItems: MenuItem[];

  constructor() { 
    this.topMenuItems=[];
  }
  leDioClick(){
    console.log('Ay');


  }
  ngOnInit(): void {
    this.topMenuItems = [
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
  }

}
