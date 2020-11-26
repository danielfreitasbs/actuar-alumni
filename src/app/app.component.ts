import { Component } from '@angular/core';
import { AlumniService } from './services/alumni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actuar-alumni';

  constructor(private alumniService: AlumniService) {
    this.alumniService.getAlumnis();
  }
}
