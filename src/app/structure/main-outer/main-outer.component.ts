import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { Tab } from '../../models/tabs.model';

@Component({
  selector: 'app-main-outer',
  templateUrl: './main-outer.component.html',
  styleUrls: ['./main-outer.component.css']
})
export class MainOuterComponent implements OnInit {
  myTabs: Tab[]=[];

  constructor(private tabsService:TabsService) {
    
  }

  ngOnInit(): void {
    this.myTabs=this.tabsService.myTabs;
  }
  
}
