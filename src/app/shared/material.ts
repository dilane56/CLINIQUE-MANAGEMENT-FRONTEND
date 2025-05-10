// shared/material.ts
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatSort} from '@angular/material/sort';

export const MATERIAL_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavContainer,
  MatNavList,
  MatListItem,
  RouterLink,
  MatSidenav,
  MatToolbar,
  MatMenuTrigger,
  MatIcon,
  MatMenu,
  MatMenuItem,
  MatGridList,
  MatGridTile,
  MatOption,
  MatSelect,
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerInput,
  MatSort,
] as const;



