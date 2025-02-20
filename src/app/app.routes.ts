import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsComponent } from './us/us.component';
import { GabrielComponent } from './gabriel/gabriel.component';
import { GorkaComponent } from './gorka/gorka.component';
import { SmithComponent } from './smith/smith.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    
    {path: 'Gorka', component: GorkaComponent},
    {path: 'Smith', component: SmithComponent},
    {path: 'Gabriel', component: GabrielComponent},
    {path: '**', redirectTo:''}
];


