import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-stats-cards',
  imports: [
    MatCard,
    NgForOf,
    MatIcon,

  ],
  templateUrl: './stats-cards.component.html',
  standalone: true,
  styleUrl: './stats-cards.component.scss'
})
export class StatsCardsComponent {
  stats = [
    {
      title: 'Total Patients',
      value: '2,350',
      change: '+5.3% from last month',
      icon: 'people',
      positive: true
    },
    // Autres stats...
  ];
}
