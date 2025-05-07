import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/button.component';
import { Card } from './components/card.component';
import { Categories } from './components/categories.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Button,Card,Categories],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-front-angular';
}