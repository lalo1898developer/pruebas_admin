import { Component, OnInit } from '@angular/core';
import { ModuleModel } from 'src/app/models/module.model';
import { SystemModel } from 'src/app/models/system.model';
import { SystemService } from 'src/app/services/system.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  public systems: SystemModel[];
  public modules: ModuleModel[];
  public submodules: ModuleModel[];
  public ModuleProgress = 0;
  public SubmoduleProgress = 0;

  constructor(
    private _systems: SystemService,
  ) {
    this.getSystems();

    this.modules = new Array<ModuleModel>();
    this.submodules = new Array<ModuleModel>();

    //this.systems = DATA_SYSTEMS;

   }

  ngOnInit(): void {}

  hasModules(): boolean{
    return this.modules.length > 0;
  }

  hasSubmodules(): boolean{
    return this.submodules.length > 0;
  }

  getSystems(){
    this._systems.getSystems().subscribe(
      response => {
        this.systems = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  getModules(id){

    this.ModuleProgress = 0;
    this._systems.getModules(id).subscribe(
      response => {
        this.modules = response;
        this.ModuleProgress = 1;
      },
      error => {
        console.log(error);
      }
    )

    
  }

  getSubModules(id_system, id_module){

    this.SubmoduleProgress = 0;
    this._systems.getSubModules(id_system, id_module).subscribe(
      response => {
        this.submodules = response;
        this.SubmoduleProgress = 1;
      },
      error => {
        console.log(error);
      }
    )
  }

  addModule(id){
    Swal.fire({
      title: 'Agregar módulo',
      text: "Ingrese el nombre del módulo",
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (name) => {

        var module = {name: name};

        this._systems.addModule(id, module).subscribe(
          response => {
            Swal.fire({
              title: "Éxito",
              text: "Módulo agregado exitosamente",
              icon: 'success',
              timer: 2000,
              onAfterClose: () => {
                  location.reload();
              }
          });
          }
        )
      }
    })
  }

  addSubmodule(system_id, module_id){
    Swal.fire({
      title: 'Agregar Submódulo',
      text: 'Ingrese el nombre del submódulo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (name) => {

        var submodule = {name: name, Module: module_id};

        this._systems.addModule(system_id, submodule).subscribe(
          response => {
            Swal.fire({
              title: "Éxito",
              text: "Módulo agregado exitosamente",
              icon: 'success',
              timer: 2000,
              onAfterClose: () => {
                  location.reload();
              }
          });
          }
        )
      }
    })
  }

}
