import { Component } from '@angular/core';

@Component({
  selector: 'app-revenuechart',
  imports: [],
  templateUrl: './revenuechart.component.html',
  standalone: true,
  styleUrl: './revenuechart.component.scss'
})
export class RevenuechartComponent {
  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Revenue (€)',
      data: [4000, 5800, 6200, 7500, 8200, 9500, 11000],
      borderColor: '#3f51b5',
      backgroundColor: 'rgba(63, 81, 181, 0.1)',
      tension: 0.4
    }]
  };

  chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
