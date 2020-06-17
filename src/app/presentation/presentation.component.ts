import { Component, OnInit } from '@angular/core';
/* Diese Komponete macht expanded panels*/
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  step = 0;
  constructor() { }

  ngOnInit(): void {
  }
  setStep(index: number){
    this.step = index;
  }
  nextStep(){
    this.step++;
  }
  prevStep(){
    this.step--;
  }

}
