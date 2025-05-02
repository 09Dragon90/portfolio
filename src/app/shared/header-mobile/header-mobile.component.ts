import { Component, Input } from '@angular/core';
import { MenueComponent } from './menue/menue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  @Input() menueActive = true;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MenueComponent, {
      position: { right: '24px', top: '60px' },
      panelClass: 'dialog-project',
      data: { menueActive: this.menueActive },
    });
  }
}
