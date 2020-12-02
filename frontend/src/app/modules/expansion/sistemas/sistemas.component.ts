import { Component, OnInit } from '@angular/core';
import { ModuleModel } from '../../tree/models/module.model';
import { SystemModel } from '../../tree/models/system.model';
import { ModuleService } from '../services/module.service';
import { SistemasService } from '../services/sistemas.service';

const DATA_SYSTEMS: SystemModel[] = null



@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {

  public systems: SystemModel[];
  public modules: ModuleModel[];
  public submodules: ModuleModel[];

  constructor(
    private _systems: SistemasService,
    private _modules: ModuleService
  ) {
    this.getSystems();

    //this.systems = DATA_SYSTEMS;

   }

  ngOnInit(): void {
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
    this._modules.getModules(id).subscribe(
      response => {
        this.modules = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  getSubModules(id_system, id_module){
    this._modules.getSubModules(id_system, id_module).subscribe(
      response => {
        this.submodules = response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
