import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RectComponent } from "./rect/rect/rect.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rectSize = {
    width: '200',
    height: '100'
  };
}
