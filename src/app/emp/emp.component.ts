import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Emp } from './emp';
import { EmpService } from '../emp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map} from "rxjs/operators";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EmpComponent implements OnInit {
  collection = [];
  arr:Emp[]=[];
  config:any;
  id:string;
name:string;
description:string;

  constructor(private _data:EmpService,private route: ActivatedRoute, private router: Router) {
  this.config = {
    currentPage: 1,
    itemsPerPage: 8
};

this.route.queryParamMap
.pipe(map(params => params.get('page')))
.subscribe(page => this.config.currentPage = page);


for (let i = 1; i <= 100; i++) {
this.collection.push(`item ${i}`);
}

}

pageChange(newPage: number) {
  this.router.navigate(['/empdetail'], { queryParams: { page: newPage } });
}

  ngOnInit() {

  this._data.getAllEmployee().subscribe(
    (data:Emp[])=>{
      this.arr=data;

    }
  );
 }
 onEmpDel(id:number){
  this._data.delEmployee(id).subscribe(
    (data:any)=>{
      this.ngOnInit();
      alert("delete");
    }
    );
    }
  editemployeeget(item)
  {
     this.id=item.id;
     this.name=item.name;
     this.description=item.description;
     console.log(item);
}
UpdateEmployee(f1){
  var req = {
    id:f1.value.id,
    name:f1.value.name,
    description:f1.value.description,
    // isactive:this.employee[this.i1].isactive,
    // createdby:this.employee[this.i1].createdby,
    // createddate:this.employee[this.i1].createddate,
    // modifiedby:this.employee[this.i1].modifiedby,
    // modifieddate:this.employee[this.i1].modifieddate
  }
  this._data.editemployee(req).subscribe((data:any) => {
    this._data.getAllEmployee().subscribe(
      (data:Emp[])=>
      {
       this.arr=data
      }

    );
    alert("Record Edited.");
  });
}
onCollegeSave(f:NgForm)
{
  this._data.addemployee(f.value).subscribe((data:any) => {
    this._data.getAllEmployee().subscribe(
      (data:Emp[])=>
      {
       this.arr=data
      }

    );
    alert("Employee added");
  });
}
search(value) {
  if (value != "") {
    // Search the corresponding registration entry from the list.
    this.arr = this.arr.filter(x => x.name.indexOf(value) != -1);
  }else {
    this._data.getAllEmployee().subscribe(
      (data: Emp[]) => {
        this.arr = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  }
}
