import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MATERIAL_MODULES} from '../../../shared/material';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {StatsCardsComponent} from '../components/stats-cards/stats-cards.component';
import {RevenuechartComponent} from '../components/revenuechart/revenuechart.component';
import {UserdistributionComponent} from '../components/userdistribution/userdistribution.component';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    MATERIAL_MODULES,
    StatsCardsComponent,
    RevenuechartComponent,
    UserdistributionComponent,
    RouterOutlet,
    MatSidenavModule
  ],
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {


}
