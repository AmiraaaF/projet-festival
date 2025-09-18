import { Component } from '@angular/core';
import { FestivalCard } from '../festival-card/festival-card';
import { FestivalDto } from '../festival/festival-dto';

@Component({
  selector: 'app-festival-list',
  imports: [FestivalCard],
  templateUrl: './festival-list.html',
  styleUrl: './festival-list.css'
})
export class FestivalList {
  festival1: FestivalDto = { name: 'Festival A', location: 'Location A', year: 2023 };
  festival2: FestivalDto = { name: 'Festival B', location: 'Location B', year: 2024 };
  festival3: FestivalDto = { name: 'Festival C', location: 'Location C', year: 2025 };
  hide1 = false;
  hide2 = false;
  hide3 = false;

  onDelete1() {
    this.hide1 = true;
  }
  onDelete2() {
    this.hide2 = true;
  }
  onDelete3() {
    this.hide3 = true;
  }
}
