import { Component, OnInit, ViewChild } from '@angular/core';
import { Emp } from '../emp/emp';
import { EmpService } from '../emp.service';
import { MatMenuTrigger, MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  displayedColumns: string[] = ['select','id','name','description'];
  arr:Emp[]=[];
  dataSource = new MatTableDataSource<Emp>();
  id: number;
  name: string;
  description: string;
  selection = new SelectionModel<Emp>(true, []);


  constructor(private _data:EmpService,private toastr:ToastrService) { }

  ngOnInit() {

    this._data.getAllEmployee().subscribe(
      (data:Emp[])=>{
        this.arr=data;
        this.dataSource = new MatTableDataSource<Emp>(this.arr);

      }
    );
   }
   @ViewChild(MatMenuTrigger,{static:false})
   contextMenu: MatMenuTrigger;

   contextMenuPosition = { x: '0px', y: '0px' };

   onContextMenu(event: MouseEvent, item: Emp) {
     event.preventDefault();
     this.contextMenuPosition.x = event.clientX + 'px';
     this.contextMenuPosition.y = event.clientY + 'px';
     this.contextMenu.menuData = { 'item': item };
     this.contextMenu.openMenu();
   }
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
   removeSelectedRows() {

    this.selection.selected.forEach(item => {
      let index: number = this.arr.findIndex(d => d === item);
      console.log(this.arr.findIndex(d => d === item));
      this.arr.splice(index,1)
      this.dataSource = new MatTableDataSource<Emp>(this.arr);
    });
    this.selection = new SelectionModel<Emp>(true, []);
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

   onContextMenuAction1(id:number) {
  //    alert(`Click on Action 1 for ${item.name}`);
  //  }
  this._data.delEmployee(id).subscribe(
    (data:any)=>{
      this.ngOnInit();
      this.toastr.success(`This Employee ID Is Deleted ${id}`)
      // alert(`Click on Action 1 for ${id}`);
    }
    );
    }

  //  onContextMenuAction2(item: Emp) {
  //    alert(`Click on Action 2 for ${item.name}`);
  //  }
  editemployeeget(item) {
    this.id=item.id;
    this.name=item.name;
    this.description=item.description;
    console.log(item);
}
  UpdateEmployee(f1) {
    var req = {
      id: f1.value.id,
      name: f1.value.name,
      description: f1.value.description
    };
    this._data.editemployee(req).subscribe((data: any) => {
      this._data.getAllEmployee().subscribe((data: Emp[]) => {
        this.ngOnInit();
        this.arr = data;
      });
      // alert(`Click on Action 1 for ${this.id}`);
      this.toastr.success(`This Employee ID Is Update ${this.id}`)
    });
}
onCollegeSave(f:NgForm)
{
  this._data.addemployee(f.value).subscribe((data:any) => {
    this._data.getAllEmployee().subscribe(
      (data:Emp[])=>
      {
        this.ngOnInit();
       this.arr=data
      }
    );
    // alert('Employee added');
    this.toastr.success(`This Employee Is Deleted ${this.id}`)
  });
}
}

