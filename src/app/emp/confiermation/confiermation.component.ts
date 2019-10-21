import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpService } from 'src/app/emp.service';
import { Emp } from '../emp';


@Component({
  selector: 'app-confiermation',
  templateUrl: './confiermation.component.html',
  styleUrls: ['./confiermation.component.css']
})
export class ConfiermationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfiermationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Emp,
    private _data: EmpService) { }

    ngOnInit() {
    }
    onUserDelete(id: number) {
    console.log('id:', id);
    }
    onNoClick(): void {
    this.dialogRef.close();
    }

}
