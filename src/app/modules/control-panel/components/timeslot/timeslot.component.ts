import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.scss']
})
export class TimeslotComponent implements OnInit {
  dropdownList = ["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"];
  selectedTimes: string[] = [];
  dropdownSettings:IDropdownSettings = {};

  @Input() user!: IUser;
  originalTimes: string[] | undefined = [];

  constructor() { 
    this.dropdownSettings = {
      singleSelection: false,
      idField: "time",
      textField: "time",
      itemsShowLimit: 99,
      allowSearchFilter: false,
      enableCheckAll: false
    }
  }

  ngOnInit(): void {
    this.selectedTimes = this.user.times;
    this.originalTimes = this.user.times;
  }

  // Sorts the times selected, enabling it to be compared for changes
  onTimeChange(): void {
    this.user.times = this.selectedTimes.sort();
  }
}
