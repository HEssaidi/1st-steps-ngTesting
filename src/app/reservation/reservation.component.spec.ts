import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArgumentOutOfRangeError } from 'rxjs';
import { AppComponent } from '../app.component';

import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('it should register a customer', () => {
    expect(component.registerCustomer()).toBe(11);
  });
  it('it should unregister a customer', () => {
    expect(component.unRegisterCustomer()).toBe(9);
  });
  it('room is reserved or not', () => {
    // let currentReserv= new ReservationComponent();  
    let isRoomReserved = component.reserveRoom();
    expect(isRoomReserved).toBeTruthy()
  });
  it(`checking on app component title`, () => {
    const app = TestBed.createComponent(AppComponent).debugElement.componentInstance;
    expect(app.title).toBe('first-step-ng-test')
  });
});
