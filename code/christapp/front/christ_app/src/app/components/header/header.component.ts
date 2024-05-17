import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
  ]
})

/**
 * @description mat button attrinutes:
 * mat-button	Rectangular text button w/ no elevation
 * mat-raised-button	Rectangular contained button w/ elevation
 * mat-flat-button	Rectangular contained button w/ no elevation
 * mat-stroked-button	Rectangular outlined button w/ no elevation
 * mat-icon-button	Circular button with a transparent background, meant to contain an icon
 * mat-fab	Circular button w/ elevation, defaults to theme's accent color
 * mat-mini-fab	Same as mat-fab but smaller
 * 
 */
export class HeaderComponent {
  private breakpointObserver = inject(BreakpointObserver);
  //values https://github.com/mdo.png or assets/img/default.avif
  profileImg : string = "https://github.com/mdo.png";
  appImg: string = "assets/img/logo-150x150.png";
  notificationHidden:boolean = false;
  notificationsNumber:number = 5;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
