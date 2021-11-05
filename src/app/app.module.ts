import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//primeng
import {ButtonModule} from 'primeng/button';

import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {SplitterModule} from 'primeng/splitter';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { TopmenuComponent } from './structure/topmenu/topmenu.component';
import { StatusbarComponent } from './structure/statusbar/statusbar.component';
import { LeftmenuComponent } from './structure/leftmenu/leftmenu.component';
import { MainOuterComponent } from './structure/main-outer/main-outer.component';
import { MainInnerComponent } from './structure/main-inner/main-inner.component';
import { TabspaceComponent } from './structure/tabspace/tabspace.component';
import { TabComponent } from './structure/tabspaces/tab/tab.component';
import { TabDividerComponent } from './structure/tabspaces/tab-divider/tab-divider.component';
import { TestcontainerComponent } from './structure/tabspaces/testcontainer/testcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    StatusbarComponent,
    LeftmenuComponent,
    MainOuterComponent,
    MainInnerComponent,
    TabspaceComponent,
    TabComponent,
    TabDividerComponent,
    TestcontainerComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TabViewModule,
    SplitButtonModule,
    SlideMenuModule,
    InputTextModule,
    ToolbarModule,
    TableModule,
    ContextMenuModule,
    BreadcrumbModule,
    SplitterModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
