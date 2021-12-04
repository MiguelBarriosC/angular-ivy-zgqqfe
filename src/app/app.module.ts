import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OperationComponent } from './operation/operation.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    NgxsModule.forRoot([],
      { developmentMode: true }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: false
    })
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    OperationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
