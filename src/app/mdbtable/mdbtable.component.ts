import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-mdbtable',
  templateUrl: './mdbtable.component.html',
  styleUrls: ['./mdbtable.component.css']
})
export class MdbtableComponent implements OnInit {
  // editField: string;
  // personList: Array<any> = [
  //   { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
  //   { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
  //   { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
  //   { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
  //   { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  // ];

  // awaitingPersonList: Array<any> = [
  //   { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
  //   { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
  //   { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
  //   { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
  //   { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  // ];
  displayedColumns: string[] = ['id','name','description'];
  arr:Emp[]=[];
  // dataSource = new MatTableDataSource<Emp>();
  id: number;
  name: string;
  description: string;
  constructor(private _data:EmpService) { }

  ngOnInit() {
    this._data.getAllEmployee().subscribe(
      (data:Emp[])=>{
        // debugger;
        this.arr=data;
        // this.dataSource = new MatTableDataSource<Emp>(this.arr);

      }
    );
  }


  // updateList(id: number, property: string, event: any) {
  //   const editField = event.target.textContent;
  //   this.personList[id][property] = editField;
  // }

  // remove(id: any) {
  //   this.awaitingPersonList.push(this.personList[id]);
  //   this.personList.splice(id, 1);
  // }

  // add() {
  //   if (this.awaitingPersonList.length > 0) {
  //     const person = this.awaitingPersonList[0];
  //     this.personList.push(person);
  //     this.awaitingPersonList.splice(0, 1);
  //   }
  // }

  // changeValue(id: number, property: string, event: any) {
  //   this.editField = event.target.textContent;
  // }
}
