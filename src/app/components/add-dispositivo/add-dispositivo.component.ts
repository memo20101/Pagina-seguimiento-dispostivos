import { Component, OnInit } from '@angular/core';
import { dispositivo } from 'src/app/model/dispositivo';
import {ServiceNameService} from '../../services/service.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-dispositivo',
  templateUrl: './add-dispositivo.component.html',
  styleUrls: ['./add-dispositivo.component.css']
})
export class AddDispositivoComponent implements OnInit {
  dispositivo = new dispositivo();
  submitted = false;
  msgError = '';
  isDisabled = true; 
  constructor(private ServiceNameService:ServiceNameService) { }

  ngOnInit(): void {
  }
  savedispo(): void {
    const data = {
      isbn: this.dispositivo.isbn,
      id_pos: this.dispositivo.id_pos,
      tipe: this.dispositivo.tipe,
      version: this.dispositivo.version,
      novedad:this.dispositivo.novedad,
      fechaini:this.dispositivo.fechaini
    };

    this.ServiceNameService.create(data)
      .subscribe(
        data => {
          alert("se agrego");
          this.submitted=true;
          console.log(data);
        },
        err => {
          this.msgError  = err.error.message;
          console.log(err);
        });
  }
  newdispo() {
    this.submitted = false;
    this.dispositivo.isbn = 0;
    this.dispositivo.id_pos = "null";
    this.dispositivo.tipe = "null";
    this.dispositivo.novedad = "null";
    this.dispositivo.version = "null";
    this.isDisabled = true;
  }
  formulario = new FormGroup({
    Tipodispo: new FormControl(''),
    
  })
}
