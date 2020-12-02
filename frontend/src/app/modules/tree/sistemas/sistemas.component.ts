import { TreeDataNodeFlattener } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeData } from '../models/tree-data.model';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';
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
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})

export class SistemasComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;

  //flatNodeMap = new Map<TreeData, TreeData>();

  dataChange = new BehaviorSubject<TreeData[]>([]);

  constructor(
  ) {
   }

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(node => node.children);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.nestedDataSource.data = TREE_DATA;
  }

  //private _getChildren = (node: TreeData) => of(node.children);
  hasNestedChild = (_: number, node: TreeData) => !!node.children && node.children.length > 0;

  hasNoContent = (_: number, _nodeData: TreeData) => _nodeData.name === '';

  insertItem(parent: TreeData, name: string) {
      parent.children.push({item: name} as TreeData);
      //this.dataChange.next(this.data);
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TreeData) {
    const parentNode = node;
    this.insertItem(parentNode!, ''); 
    //this.treeControl.expand(node);
  }

}
