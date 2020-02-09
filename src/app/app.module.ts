import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { InfoPageComponent } from './shared/pages/info-page/info-page.component';
import { FormQuestionComponent } from './shared/components/form-question/form-question.component';
import { FormControlComponent } from './shared/components/form-control/form-control.component';
import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'people',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [{ name: 'firstName', keypath: 'firstname', options: { unique: false } }, { name: 'lastName', keypath: 'lastname', options: { unique: false } }, { name: 'password', keypath: 'password', options: { unique: false } }, { name: 'email', keypath: 'email', options: { unique: false } }]
    }
  ]
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AppComponent, MainPageComponent, LoginPageComponent, RegisterPageComponent, InfoPageComponent, FormQuestionComponent, FormControlComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, FlexLayoutModule, MatCardModule, NgxIndexedDBModule.forRoot(dbConfig)],
  providers: [LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
