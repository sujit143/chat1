import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { NodeService } from '../node.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-treetable',
  templateUrl: './treetable.component.html',
  styleUrls: ['./treetable.component.css']
})
export class TreetableComponent implements OnInit {
  files: TreeNode[];

    selectedNode: TreeNode;

    cols: any[];

    items: MenuItem[];

    selectedColumns: any[];

    result;

    display: boolean = false;

    AddForm: FormGroup;

    node: TreeNode;


  constructor(private nodeService: NodeService, private messageService: MessageService,private fb:FormBuilder) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }

    ];
    this.selectedColumns = this.cols;


    this.items = [
        { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
        { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) },
        { label: 'Add', icon: 'pi pi-home', command: (event) => this.opendialog(this.selectedNode) },
        { label: 'Delete', icon: 'pi pi-apple', command: (event) => this.deleteChild() },
    ];

    this.getdata()
    this.AddForm = this.fb.group({
      name: new FormControl(null),
      size: new FormControl(null),
      type: new FormControl(null),
    });

}

getdata() {
  this.nodeService.getFilesystem().then(files => {
  this.files = files;
  console.log(this.files);
  });
  }

viewFile(node) {
    this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size + ' - ' + node.data.type });
}

toggleFile(node) {
    node.expanded = !node.expanded;
    this.files = [...this.files];
}
deleteChild() {
  if (this.selectedNode && this.selectedNode.parent) {
      let index = this.selectedNode.parent.children.indexOf(this.selectedNode);
      this.selectedNode.parent.children.splice(index,1);

      console.log('Selected child deleted in',this.files);
  }
}
opendialog(node) {
  this.node = node;
  console.log(this.node);
  this.display = true;
}
OnAddArticleSave() {
  this.result = {
    data: {
      'name': this.AddForm.value.name,
      'size': this.AddForm.value.size,
      'type': this.AddForm.value.type,
    },
    children: []
  }
  this.node['children'].push(this.result);

  this.display = false;
  this.AddForm.reset();
 }

}

