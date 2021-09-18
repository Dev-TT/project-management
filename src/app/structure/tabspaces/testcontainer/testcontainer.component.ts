import { Component, OnInit, Input,} from '@angular/core';
import { Tab } from '../../../models/tabs.model';

@Component({
  selector: 'app-testcontainer',
  templateUrl: './testcontainer.component.html',
  styleUrls: ['./testcontainer.component.css']
})
export class TestcontainerComponent implements OnInit {
  @Input() tab:Tab;
  constructor() {
    this.tab= new Tab('Starting Title');
  }

  ngOnInit(): void {
    
  }

}
