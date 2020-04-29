import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
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
          type="number"
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
 
  
}
