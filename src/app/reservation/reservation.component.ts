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
  reserveRoom():any{
    let roomReserved = false;
    if(this.customerCount<this.hotelRoomCapacity){
      this.customerCount++;
      roomReserved = true;
      console.log(this.customerCount)
      console.log("reserveRoom")
      console.log(roomReserved)
    }
  }

  ngOnInit(): void {
  }

}
