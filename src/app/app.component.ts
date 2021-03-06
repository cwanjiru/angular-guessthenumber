import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <p class="text-info">
      
      </p>
      <h2>Guess the Number!!!</h2>
      <div class="card bg-light mb-3">
        <div class="card-body">
          <p class="card-text">
            Guess the computer generated random number between 1 and 1000.
          </p>
        </div>
      </div>
      <div>
        <label>Your Guess: </label>
        <input
          [type]="'number'"
          [value]="guess"
      
          (input)="guess = $event.target.value"
        />
        


        <button class="btn btn-primary btn-sm" (click)="verifyGuess()">
          Verify
        </button>
        <button class="btn btn-warning btn-sm" (click)="initialiseGame()">
          Restart
        </button>
      </div>
      <div>
      
      <div>
        <p *ngIf="deviation < 0" class="alert alert-warning">
          Your Guess is Higher
        </p>
        <p *ngIf="deviation > 0" class="alert alert-warning">
          Your Guess is Lower
        </p>
        <p *ngIf="deviation === 0" class="alert alert-success">Correct Guess</p>
      </div>
      <p class="text-info">
        Number of Guesses:
        <span class="badge">{{ noOfTries }}</span>

      </p>
      




    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  deviation:number;
  noOfTries:number;
  original:number;
  guess:number;
  testVariable:string;



  constructor(){
    this.initialiseGame()
  }
  initialiseGame=()=>{
    this.noOfTries=0;
    this.original=Math.floor((Math.random()*1000)+ 1);
    this.guess=null;
    this.deviation=null;

  }
  
  verifyGuess=()=>{
    if (this.guess>=1){
      this.deviation=this.original-this.guess;
      this.noOfTries=this.noOfTries+1;
      
    }
    else{
      alert('Please use a number greater than 0 or less than a 1000')
    }
  }
  

  
}
