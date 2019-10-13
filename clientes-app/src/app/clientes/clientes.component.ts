import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  clientes: Cliente[];
  //private clienteService:ClienteService;
  constructor(private ClienteService: ClienteService) { }
  //constructor(clienteService:ClienteService){}
  ngOnInit() {
    //this.clientes = this.ClienteService.getClientes();
    this.ClienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
