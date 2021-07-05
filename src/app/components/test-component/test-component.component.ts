import { Component, OnInit} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { 
  }


  abc="abcdefghijklmnopqrstuvwxyz0123456789";
  rs = '';
  getRed: boolean = false;
  getBlue: boolean = false;
  invisible: boolean = false;
  result: string = '';

  ngOnInit(): void {

    const obs$ = interval(3000);
    obs$.subscribe ((d) => {
      this.rs = this.result;
    })

    setInterval(this.generator);
  }


  generator(){

    while(this.rs.length < 5){
      this.rs = this.rs + this.abc[Math.floor(Math.random() * this.abc.length)];

      //Проверка на палиндром
      this.rs = this.rs.replace(/[^a-z0-9]+/g,"");
      if(this.rs === this.rs.split("").reverse().join("")){
        this.getRed = true;
      }
      else{
        this.getRed = false;
      }    

      // Проверка на цифры
      if (Number(this.rs)){
        this.getBlue = true;
      }
      else{
        this.getBlue = false;
      }

      // проверка на наличие 0
      let razbit = this.rs.split('');
      console.log(razbit);

      if(this.rs.includes("0")){
        this.invisible = true;  
      }
      else{
        this.invisible = false;
      }
    }
      
      let getElem = <HTMLElement>document.getElementById('test');
      getElem.innerHTML = this.rs;
  }
}


  
