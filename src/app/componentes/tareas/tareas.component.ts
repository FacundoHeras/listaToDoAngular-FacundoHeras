import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Tarea} from '../../modelos/tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {





  tareas:Tarea[] = [];

  constructor() { }

  ngOnInit(): void {
 

  }

  agregarTarea(tarea:Tarea){

    this.tareas.unshift(tarea);
   
  }


}
