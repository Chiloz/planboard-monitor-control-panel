import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailgroupsListComponent } from './mailgroups-list.component';

describe('MailgroupsListComponent', () => {
  let component: MailgroupsListComponent;
  let fixture: ComponentFixture<MailgroupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailgroupsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailgroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
