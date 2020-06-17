import { Component } from '@angular/core';
/*Diese Komponente läd die App und setzt den Titel*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Was ist Angular?';
}
