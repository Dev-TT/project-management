import { Injectable } from "@angular/core";
import { Tab } from '../models/tabs.model';

@Injectable()
export class TabsService {
  public myTabs: Tab[]=[];
  selectedTab: Tab;


    constructor(){
      this.selectedTab = new Tab('NewTab');
      this.addNewTab();
    }
    activateTab(tab: Tab){
      this.selectedTab.active=false;

      tab.active = true;
      this.selectedTab=tab;
    }
    addNewTab(){
      if (this.selectedTab!=undefined){
        this.selectedTab.active=false;
      } 
      this.myTabs.push(new Tab("NewTab"));
      this.selectedTab=this.myTabs[this.myTabs.length-1];
    }
    closeTab( tab: Tab ){
        // if not tab.active then just close it
        // if tab.active then select the next tab in the list
        // if tab=1st then select 2nd

        var indexOfTab: number;
        var selectNextTab: boolean=false;
        var selectPreviousTab: boolean=false;

        indexOfTab=this.myTabs.indexOf(tab);
        if (tab.active) {
          selectNextTab=true;
        }

        if (indexOfTab==this.myTabs.length-1){
          selectNextTab=false;
          selectPreviousTab=true;
        }

        this.myTabs.splice(this.myTabs.indexOf(tab),1);

        if (selectNextTab && this.myTabs.length>=1){
          this.selectedTab=this.myTabs[indexOfTab];
          this.selectedTab.active=true;
        }
        if (selectPreviousTab && this.myTabs.length>=1){
          // at last position
          this.selectedTab=this.myTabs[indexOfTab-1];
          this.selectedTab.active=true;
        }

      }
    
    
    showHowMany(){
        console.log("Totaltabs (Service): " + this.myTabs.length);
    }

    showAll(){
      console.log("All Tabs:");
      console.log(this.myTabs);
    }
}

