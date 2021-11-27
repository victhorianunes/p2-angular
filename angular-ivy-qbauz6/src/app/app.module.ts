import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { VicthoriaTasksService} from './victhoria-tasks.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VicthoriaTasksComponent } from './victhoria-tasks/victhoria-tasks.component';
import { VicthoriaHomeComponent } from './victhoria-home/victhoria-home.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(
                    [
                      {path: '', component: VicthoriaHomeComponent},
                      {path: 'tasks', component: VicthoriaTasksComponent}

                    ]
                  )],
  declarations: [ AppComponent, HelloComponent, VicthoriaTasksComponent, VicthoriaHomeComponent, NavbarComponent ],
  providers: [VicthoriaTasksService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
