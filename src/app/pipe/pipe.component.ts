import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp/emp';
import { EmpService } from '../emp.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  arr: Emp[];

    cols: any[];

    selectedCar: Emp;

    selectCars: Emp[];

    items: MenuItem[];


  constructor(private _data: EmpService , private messageService: MessageService) { }

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

    this.items = [
        { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedCar) },
        { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar) }
    ];
}
  viewCar(car: Emp) {
    this.messageService.add({ severity: 'info', summary: 'Employee Selected', detail: car.id + ' - ' + car.name + ' - ' + car.description});
}

deleteCar(car: Emp) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id == car.id) {
            index = i;
            break;
        }
    }
    this.arr.splice(index, 1);

    this.messageService.add({ severity: 'info', summary: 'Employee Deleted', detail: car.id + ' - ' + car.name + ' - ' + car.description});
 }
 showResponse(event) {
  this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
}
}
