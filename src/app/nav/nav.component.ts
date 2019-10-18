import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp';
import { EmpService } from '../emp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  displayDialog: boolean;

  arr: Emp[];

  selectedCar: Emp;

  newCar: boolean;

  cars: Emp[];

  cols: any[];

  constructor(private _data:EmpService) { }

  ngOnInit() {
    this._data.getAllEmployee().subscribe(
      (data: Emp[]) => {
      this.arr = data;
    }
    );

    this.cols = [
        { field: 'id', header: 'id' },
        { field: 'name', header: 'name' },
        { field: 'description', header: 'description' }
    ];
}
  showDialogToAdd() {
    this.newCar = true;
    this.arr =[];
    this.displayDialog = true;
}

AddEmployee(f:NgForm) {
  console.log("ADD");
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

delete(id:number) {
  this._data.delEmployee(id).subscribe(
    (data:any)=>{
      this.ngOnInit();
      alert("delete");
    }
    );
    }

onRowSelect(event) {
    this.newCar = false;
    // this.arr = this.cloneCar(event.data);
    this.displayDialog = true;
}

// cloneCar(c: Emp): Emp {
//     let arr = {};
//     for (let prop in c) {
//         arr[prop] = c[prop];
//     }
//     return arr;
//  }
}

