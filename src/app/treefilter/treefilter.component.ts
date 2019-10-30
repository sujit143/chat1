import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-treefilter',
  templateUrl: './treefilter.component.html',
  styleUrls: ['./treefilter.component.css']
})
export class TreefilterComponent implements OnInit {
  files: TreeNode[];

    cols: any[];

    selectedColumns: any[];

    name = 'Angular 5';

    colorData: any;

  constructor(private nodeService: NodeService) {
    this.colorData = [{
      bgColor:'#ffffff',
      fgColor:'#000000'
    },{
      bgColor:'#c6ae71',
      fgColor:'#182618'
    },{
      bgColor:'#937427',
      fgColor:'#c7e0c7'
    },{
      bgColor:'#4c3e1d',
      fgColor:'#c7e0c7'
    },
  ]
  }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    this.selectedColumns = this.cols;
 }
}
