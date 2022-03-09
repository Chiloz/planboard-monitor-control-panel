import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MailgroupService } from 'src/app/shared/mailgroup.service';
import { IDivision } from 'src/app/shared/model/division.model';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-mailgroups-list',
  templateUrl: './mailgroups-list.component.html',
})
export class MailgroupsListComponent implements OnInit {
  @Input() user!: IUser;
  sub!: Subscription;
  
  divisions!: IDivision[];

  constructor(public mailgroupService: MailgroupService) { }

  ngOnInit(): void {
    this.sub = this.mailgroupService.getMailgroups().subscribe({
      next: (data) => {
        this.divisions = data.divisions;
      },
      error: (err: string) => console.log(err)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
