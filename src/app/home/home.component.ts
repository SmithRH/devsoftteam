import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { UsComponent } from '../us/us.component';
@Component({
  selector: 'app-home',
  imports: [ProjectsComponent,UsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
