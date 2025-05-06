// core/services/toast.service.ts
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, '✓', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['toast-success']
    });
  }
}
