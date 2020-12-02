import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public title:String;
  public subtitle:String;
  public img;
  constructor() { 
   	this.title="La paz no es sinonimo de vida";
  	this.subtitle="La asociación de héroes de la ciudad Z";
  	

  

  }

  ngOnInit() {
  }

}
