import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RolModel } from 'src/app/models/rol.model';
import { SystemModel } from 'src/app/models/system.model';
import { ProfileModel } from 'src/app/models/profile.model';
import { ModuleModel } from 'src/app/models/module.model';
import { TreeData } from 'src/app/models/tree-data.model';
import { SystemService } from 'src/app/services/system.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-roles-tree',
  templateUrl: './roles-tree.component.html',
  styleUrls: ['./roles-tree.component.css']
})
export class RolesTreeComponent implements OnInit {

  public rol: RolModel;
  public systems: SystemModel[];
  public modules: ModuleModel[];
  public profiles: ProfileModel[];
  public submodules: ModuleModel[];
  public permissions: string[];

  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSOurce: MatTreeNestedDataSource<TreeData>;

  systemFormControl = new FormControl('', [
    Validators.required,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,

  ]);

  constructor(
    private _systems: SystemService,
    private _roles: RolService,
    private router: Router
  ) {
    this.getSystems();
    this.rol = new RolModel();
  }

  ngOnInit(): void {

    this.nestedTreeControl = new NestedTreeControl<TreeData>(node => node.submodules);
    this.nestedDataSOurce = new MatTreeNestedDataSource();
    //this.nestedDataSOurce.data = this.MAT_TREE;

    this.profiles = new Array<ProfileModel>();
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

  getTree(id) {
    this._systems.getTree(id).subscribe(
      response => {
        this.nestedDataSOurce.data = response;
      }
    )
    this.profiles = [];
  }

  updatePermission(selected, id){

    //console.log(selected + " Checked");

    this.profiles = this.profiles.filter(o => o.Module != id);
    var profile = {permission: selected, Module: id};
    this.profiles.push(profile);
    console.log(this.profiles);

  }

  setProfile(e: any, id: string){

    var select = document.getElementById(id);

    if(e.checked){

      //console.log(id + " Checked");

      var profile = {permission: "ver", Module: id};

      select.style.display = "inline";

      this.profiles.push(profile);
      
    } else {

      //console.log(id + " Unchecked");

      this.profiles = this.profiles.filter(o => o.Module != id);
      select.style.display = "none";

    }
    console.log(this.profiles);
  }

  onSubmit(form) {
    this.rol.profiles = this.profiles;
    
    this._roles.saveRol(this.rol).subscribe(
      response => {
        Swal.fire({
          title: 'Bien', //this.translate.instant('companies.addedSuccessTitle'),
          text: "Agregado con éxito", //this.translate.instant('companies.addedSuccess'),
          icon: 'success',
          timer: 2000,
          onAfterClose: () => {
            this.router.navigate(['/roles']);
          }
        });
      },
      error => {
        Swal.fire({
          title: 'Error',
          // text: this.translate.instant('error.message'),
          text: "error",//error.err,
          icon: 'error',
        });
        console.log(error);
      }
    );
    
   console.log(this.rol);
  }

}
