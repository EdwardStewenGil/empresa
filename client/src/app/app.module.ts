import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Services
import { ConceptosService } from './services/conceptos.service';

import { ConceptoFormComponent } from './components/concepto-form/concepto-form.component';
import { ConceptoListComponent } from './components/concepto-list/concepto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ConceptoFormComponent,
    ConceptoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConceptosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
