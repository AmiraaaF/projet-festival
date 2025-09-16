import { Component , input, output} from '@angular/core';
import { FestivalDto } from '../festival/festival-dto';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-festival-card',
  imports: [CommonModule],
  templateUrl: './festival-card.html',
  styleUrl: './festival-card.css'
})
export class FestivalCard {
  public festival = input<FestivalDto>();
  
}
