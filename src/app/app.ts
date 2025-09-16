import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FestivalCard } from './festival-card/festival-card';
import { FestivalList } from './festival-list/festival-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FestivalList, FestivalCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-festival');
}
