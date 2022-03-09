import { Component, Input, OnInit } from '@angular/core';
import { ICommunity } from 'src/app/shared/model/community.model';
import { IDivision } from 'src/app/shared/model/division.model';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-mailgroup-division',
  templateUrl: './mailgroup-division.component.html',
  styleUrls: ['./mailgroup-division.component.scss']
})
export class MailgroupDivisionComponent implements OnInit {
  @Input() division!: IDivision;
  @Input() user!: IUser;

  allUnits!: string[];
  checkedUnits!: { name: string, isSelected: boolean}[];

  masterSelected: boolean = false;
  indeterminate: boolean = false;

  ngOnInit(): void {
    this.allUnits = this.structureAllUnits();
    this.checkedUnits = this.getCheckedUnits();
    this.checkIndeterminate()
  }

  // Structures units for display purposes by combining the unit code with the community name
  structureAllUnits(): string[] {
    let structuredUnits: string [] = [];
    this.division.communities.forEach((community: ICommunity) => {
      community.units.forEach((unit: string) => {
        structuredUnits.push(community.name + " " + unit)
      })
    });
    return structuredUnits;
  }

  // Creates an object with each unit and its state
  getCheckedUnits(): { name: string, isSelected: boolean}[] {
    let units: { name: string, isSelected: boolean }[] = [];
    this.allUnits.forEach((unit: string) => {
      let unitcode = unit.substring(unit.length - 3);
      if(this.user?.units.includes(unitcode)) {
        units.push({ "name": unit, "isSelected": true})
      } else {
        units.push({ "name": unit, "isSelected": false})
      }
    });
    return units;
  }

  // Handles a change in a checkbox's value
  onChangeSelected(unit: string): void {
    let unitcode = unit.substring(unit.length - 3);
    this.toggleUnit(unitcode);
    this.checkIndeterminate();
  }

  // Toggles whether a unit is being subscribed by the user
  toggleUnit(unitcode: string): void {
    let index = this.user.units.indexOf(unitcode);
    if (index > -1) {
      this.user.units.splice(index, 1)
    } else {
      this.user.units.push(unitcode);
    }
  }

  // The master checkbox will check/ uncheck all items
  toggleAll(): void {
    this.indeterminate = false;
    for (var i = 0; i < this.checkedUnits.length; i++) {
      let unitcode = this.checkedUnits[i].name.substr(this.checkedUnits[i].name.length - 3);
      if(!this.checkedUnits[i].isSelected) {
        this.toggleUnit(unitcode);
      }
      this.checkedUnits[i].isSelected = this.masterSelected;
      if(!this.checkedUnits[i].isSelected) {
        this.toggleUnit(unitcode);
      }
    }
  }

  // Activates the indeterminate pseudo class if only some units are selected
  checkIndeterminate(): void {
    let countSelected = 0;
    let total = this.checkedUnits.length;

    this.checkedUnits.forEach((element: { isSelected: boolean; }) => {
      if (element.isSelected) {
        countSelected++
      }
    });

    if(countSelected !== 0 && countSelected !== total) {
      this.indeterminate = true;
    } else {
      this.indeterminate = false;
      if (countSelected == total && countSelected !== 0) {
        this.masterSelected = true;
      } else {
        this.masterSelected = false;
      }
    }
  }
}
