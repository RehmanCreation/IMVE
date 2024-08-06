import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewClientPage } from './add-new-client.page';

describe('AddNewClientPage', () => {
  let component: AddNewClientPage;
  let fixture: ComponentFixture<AddNewClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
