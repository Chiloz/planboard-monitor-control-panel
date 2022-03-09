import { Component, Input } from '@angular/core';
import { IUser } from '../../../../shared/model/user.model';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent {
  @Input() user!: IUser;
  @Input() originalTimes!: string;
  @Input() originalUnits!: string;

  // Structures and gets the hint to display on the top of the control panel, showing the user's currently saved units & times
  getHint(value: string): string {
    let input = "";
    let output = "";
    if (value == "times") {
      input = this.originalTimes.replace(/,/g, ", ")
    } else {
      input = this.originalUnits.replace(/,/g, ", ")
    }

    let lastIndex = input.lastIndexOf(",");
    if (lastIndex < 0) {
      output = input
    } else {
      output = input.substring(0, lastIndex) + " en " + input.substring(lastIndex + 1);
    }
    return output;
  }
}
