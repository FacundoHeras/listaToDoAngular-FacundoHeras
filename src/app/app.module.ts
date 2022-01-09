import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TareasComponent,
    TareaComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
