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

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
}
}
