import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {
  @Input() nombre:string = '';

  @Output() agregarTarea: EventEmitter<Tarea> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const tarea = new Tarea();
    tarea.nombre=this.nombre;
    tarea.realizada=false;
   
    this.agregarTarea.emit(tarea);
  }

 

}
