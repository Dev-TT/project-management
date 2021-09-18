import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { Tab } from '../../../models/tabs.model';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit {
  @Input() tab:Tab;
  // @Output() requestToCloseTab = new EventEmitter<Tab>();
  // @Output() requestToActivateTab = new EventEmitter<Tab>();

  hovered:boolean=false;

  constructor(private tabService:TabsService) { 
    this.tab= new Tab('Starting Title');

  }

  ngOnInit(): void {

  }

  onClose(){
    //this.requestToCloseTab.emit( this.tab);
    this.tabService.closeTab(this.tab);
  }
  onActivate(){
    // this.tab.active=true;
    // this.requestToActivateTab.emit( this.tab);
    this.tabService.activateTab(this.tab);
  }
  onCloseMouseOver(value:boolean){
    this.hovered=value;
  }
}
