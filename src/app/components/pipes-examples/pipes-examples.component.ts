import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss'],
})
export class PipesExamplesComponent implements OnInit {
  dob: Date = new Date(1994, 10, 27);
  name: string = 'ivan';

  constructor() {}

  ngOnInit(): void {}
}
