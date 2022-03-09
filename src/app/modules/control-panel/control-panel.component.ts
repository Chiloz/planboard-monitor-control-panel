import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from '../../shared/model/user.model';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  user!: IUser;
  errorMessage: string = "";
  sub!: Subscription;

  originalTimes: string = "";
  originalUnits: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.sub = this.userService.getUser().subscribe({
      next: (user: IUser) => {
          this.user = user;
          
          if(this.user.times == undefined) {
            this.user.times = []
            this.originalTimes = ""
          } else {
            this.originalTimes = user.times.sort().toString();
          }

          if(this.user.units == undefined) {
            this.user.units = []
            this.originalUnits = ""
          } else {
            this.originalUnits = user.units.sort().toString();
          }
      },
      error: (err: string) => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // Toggles whether or not the user will receive email notifications from the Planboard Monitor
  toggleActiveUser(): void {
    // Since we do not have a real API for this prototype, this function will just show a value in the console
    console.log("isActive: " + this.user.isActive);
  }

  // First checks if changes have been made, then checks if any units and times have been selected and if the user is active
  checkIfUnableToSave(): boolean {
    if(!this.changesDetected()) {
      return true;
    } else {
      if(this.user?.units.length == 0 || this.user?.times.length == 0 || !this.user?.isActive) { 
        return true;
      } else {
        return false;
      }
    }
  }

  // Checks if any changes have been made in the units and times
  changesDetected(): boolean {
    if(this.originalUnits == this.user?.units.sort().toString()){
      if(this.originalTimes == this.user?.times.sort().toString()) {
        return false;
      } else {
        return true
      }
    } else {
      return true;
    }
  }

  // Saves the user to the database through the API
  saveUser(): void {
    // Since we do not have a real API for this prototype, this function will just show an alert
    alert("Je wijzigingen zijn opgeslagen");
    this.resetOriginalValues();

    // For the working prototype, the code was as follows:
    
    // let data: any = {
    //   "times": 
    //       this.user.times
    //   ,
    //   "units": 
    //       this.user.units
    // }
    // this.userService.setUser(data).subscribe({
    //   next: data => {
    //       alert("Je wijzigingen zijn opgeslagen");
    //       this.resetOriginalValues();
    //   },
    //   error: error => {
    //       this.errorMessage = error.message;
    //       console.error('There was an error!', error);
    //   }
    // })
  }

  // Resets original values when the user has saved their new settings, used 
  resetOriginalValues(): void {
    this.originalUnits = this.user?.units.sort().toString();
    this.originalTimes = this.user?.times.sort().toString();
  }
}
