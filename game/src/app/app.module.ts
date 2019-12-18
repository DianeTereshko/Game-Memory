import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Модули
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';
// Компоненты Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE } from '@angular/material/core';

// Конфигурации
function countdownConfigFactory(): CountdownConfig  {
  return {};
}

// Компоненты
import { AppComponent } from './app.component';
import { MemorytestComponent } from './components/memorytest/memorytest.component';
import { StartgameComponent } from './components/startgame/startgame.component';
import { RaitingComponent } from './components/raiting/raiting.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MemorytestComponent,
    StartgameComponent,
    RaitingComponent,
    AboutComponent,
    RegisterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatMomentDateModule,
    CountdownModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
    FormBuilder
  ],
  entryComponents: [MemorytestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
