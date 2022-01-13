import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  hotelRoomCapacity=30
  customerCount=10
  constructor() { }



  registerCustomer(){
    return ++this.customerCount;
  }
  unRegisterCustomer(){
    return --this.customerCount;
  }

  ngOnInit(): void {
  }

}
