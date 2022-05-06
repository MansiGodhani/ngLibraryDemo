import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-library',
  template: `
    <p>
      ng-library works!
    </p>
  `,
  styles: [
  ]
})
export class NgLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
