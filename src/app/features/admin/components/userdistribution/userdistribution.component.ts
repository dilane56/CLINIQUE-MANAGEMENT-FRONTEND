import { Component } from '@angular/core';

@Component({
  selector: 'app-userdistribution',
  imports: [],
  templateUrl: './userdistribution.component.html',
  standalone: true,
  styleUrl: './userdistribution.component.scss'
})
export class UserdistributionComponent {
  pieData = {
    labels: ['Doctors', 'Patients', 'Secretaries'],
    datasets: [{
      data: [15, 2350, 8],
      backgroundColor: [
        '#3f51b5', '#4caf50', '#ff9800'
      ]
    }]
  };

  pieOptions = {
    cutout: '70%',
    plugins: {
      legend: { display: false }
    }
  };

  legendItems = [
    { label: 'Doctors', value: '15 (0.6%)', color: '#3f51b5' },
    // Autres éléments...
  ];
}

