import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HintComponent } from './components/hint/hint.component';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimeslotComponent } from './components/timeslot/timeslot.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MailgroupsListComponent } from './components/mailgroups-list/mailgroups-list.component';
import { MailgroupDivisionComponent } from './components/mailgroup-division/mailgroup-division.component';

@NgModule({
  declarations: [
    HintComponent,
    ControlPanelComponent,
    TimeslotComponent,
    SectionTitleComponent,
    MailgroupsListComponent,
    MailgroupDivisionComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterModule.forChild([
      { path: 'control-panel', component: ControlPanelComponent },
    ]),
    CommonModule
  ]
})
export class ControlPanelModule { }
