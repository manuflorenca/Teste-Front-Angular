import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/button.component';
import { Card } from './components/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Card],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-front-angular';
}
