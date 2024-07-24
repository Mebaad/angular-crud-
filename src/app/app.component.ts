import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OteComponent } from './ote/ote.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';
}
