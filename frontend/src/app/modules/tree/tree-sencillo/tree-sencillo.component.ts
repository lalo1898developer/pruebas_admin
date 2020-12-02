import { TreeDataNodeFlattener } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeData } from '../models/tree-data.model';
import { observable, Observable, of } from 'rxjs';
import { RolModel } from '../models/rol.model';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { SystemModel } from '../models/system.model';
import { SystemService } from '../services/system.service';

const TREE_DATA: TreeData[] = [
  {
    name: 'Sistema 1', 
    acceso: null,
    children: [
      {name: 'Módulo 1', acceso: null},
      {name: 'Módulo 2', acceso: null},
      {name: 'Módulo 3', acceso: null},
    ]
  }, {
    name: 'Sistema 2', 
    acceso: null,
    children: [
      {
        name: 'Módulo 1',
        children: [
          {name: 'Submódulo 1', acceso: null},
          {name: 'Submódulo 2', acceso: null},
        ]
      }
    ]
  },
];


@Component({
  selector: 'app-tree-sencillo',
  templateUrl: './tree-sencillo.component.html',
  styleUrls: ['./tree-sencillo.component.css']
})
export class TreeSencilloComponent implements OnInit {

  public rol: RolModel;
  public systems: SystemModel[];

  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;

  systemFormControl = new FormControl('', [
    Validators.required,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,

  ]);

  constructor(
    private _systems: SystemService
  ) {
    this.rol = new RolModel();
    this.getSystems();
   }

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(node => node.children);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.nestedDataSource.data = TREE_DATA;
  }

  //private _getChildren = (node: TreeData) => of(node.children);
  hasNestedChild = (_: number, node: TreeData) => !!node.children && node.children.length > 0;

  getSystems(){
    this._systems.getSystems().subscribe(
      response => {
        this.systems = response;
      }
    )
  }

  onSubmit(form){

  }

  selectModules(){

  }

}
