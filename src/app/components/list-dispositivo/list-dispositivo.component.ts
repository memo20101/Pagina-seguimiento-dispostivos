import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceNameService} from '../../services/service.service'
import { dispositivo } from 'src/app/model/dispositivo';
import { } from 'src/app/app/pipes/filtro.pipe';
@Component({
  selector: 'app-list-dispositivo',
  templateUrl: './list-dispositivo.component.html',
  styleUrls: ['./list-dispositivo.component.css']
})
export class ListDispositivoComponent implements OnInit {
  
  dispositivo: dispositivo[] = [];
 public search: string='';

  constructor(private service:ServiceNameService, private router:Router) { }

  ngOnInit(): void {
    this.refreshList();
  }
  retrievedispostivos(): void {
    this.service.getAll().subscribe(
        data => {
          this.dispositivo= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrievedispostivos();
  }
  buscarPOSID(search: string){
   this.search=search;
  }
}
