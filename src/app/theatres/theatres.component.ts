import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})
export class TheatresComponent implements OnInit {

  title: string;
  theatres: any;

  constructor() {
    this.title = "Theatres with Bookmyshow";
    this.theatres = [
    {id: 1, name: 'Alankar Theatre', phone: "91-7981582828", address: "123 street, bheemunipatnam, vizag"}, 
    {id: 2, name: 'Ravindra Theatre', phone: "91-7981582828", address: "123 street, bheemunipatnam, vizag"}, 
    {id: 3, name: 'Tara Theatre', phone: "91-7981582828", address: "123 street, bheemunipatnam, vizag"}
    ]
    console.log(this.theatres)
  }

  ngOnInit(): void {
  }

}
