import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ModuleModel } from '../models/module.model';
import { RolModel } from '../models/rol.model';
import { SystemModel } from '../models/system.model';
import { TreeData } from '../models/tree-data';
import { ModuleService } from '../services/module.service';
import { SistemasService } from '../services/sistemas.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  public MAT_TREE: TreeData[] = [
    {
      name: "Modulo 1",
      submodules: [
        { name: "Submódulo 1" },
        { name: "Submódulo 2" }
      ]
    },

    {
      name: "Modulo 2",
      submodules: [
        { name: "Submódulo 1" },
        { name: "Submódulo 2" }
      ]
    }
  ];

  public rol: RolModel;
  public systems: SystemModel[];
  public modules: ModuleModel[];
  public selectedModules;
  public submodules: ModuleModel[];

  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSOurce: MatTreeNestedDataSource<TreeData>;

  systemFormControl = new FormControl('', [
    Validators.required,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,

  ]);

  constructor(
    private _systems: SistemasService,
    private _modules: ModuleService
  ) {
    this.getSystems();
    this.rol = new RolModel();
  }

  ngOnInit(): void {
    console.log(this.modules);
    this.nestedTreeControl = new NestedTreeControl<TreeData>(node => node.submodules);
    this.nestedDataSOurce = new MatTreeNestedDataSource();
    //this.nestedDataSOurce.data = this.MAT_TREE;


  }

  hasNestedChild = (_: number, nodeData: TreeData) => !!nodeData.submodules && nodeData.submodules.length > 0;

  getSystems() {
    this._systems.getSystems().subscribe(
      response => {
        this.systems = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  getModules(id) {
    this._modules.getModules(id).subscribe(
      response => {
        this.modules = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  getSubModules(id_system, id_module) {
    this._modules.getSubModules(id_system, id_module).subscribe(
      response => {
        this.submodules = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  getTree(id) {
    this._modules.getTree(id).subscribe(
      response => {
        this.nestedDataSOurce.data = response;
      }
    )
  }

  agregarModulo(id) {

  }

  onSubmit(form) {

    var profiles = form.module;
    var modulos = [];
    profiles.forEach(profile => {
      if(profile.checked){
        modulos.push(profile.value);
      }
    });

    console.log(modulos);
  }

}
