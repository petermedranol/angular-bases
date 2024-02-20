import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';

// import { CounterModule } from './counter/counter.module';
// import { HeroesModule } from './heroes/heroes.moduel';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // CounterModule,
    // HeroesModule,
    DbzModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
