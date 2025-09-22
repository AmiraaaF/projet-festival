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
  festivals: FestivalDto[] = [
    { name: 'Festival A', location: 'Location A', year: 2023 , state: 'upcoming'},
    { name: 'Festival B', location: 'Location B', year: 2024, state: 'ongoing' },
    { name: 'Festival C', location: 'Location C', year: 2025, state: 'past' }
  ];
  onDelete(index: number) {
    this.festivals.splice(index, 1);
  }
  // ajout d'un compteur de festials 
  get festivalCount(): number {
    return this.festivals.length;
  }
}
