import { Component, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea: Tarea = new Tarea();


  constructor() { }

  ngOnInit(): void {
  }

  onToggle(tarea:Tarea){
    tarea.realizada = !tarea.realizada;
  }



}
