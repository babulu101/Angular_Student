import { Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StudentResordComponent } from './components/student-resord/student-resord.component';

export const routes: Routes = [
    {path:'record', component:StudentResordComponent},
    {path:'register',component:StudentRegistrationComponent}
];
