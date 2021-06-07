import { Component, VERSION } from '@angular/core';
import { Editor } from 'ngx-editor';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor() { }
  editor:any;
  ngOnInit(): void { this.editor = new Editor();  }

}
