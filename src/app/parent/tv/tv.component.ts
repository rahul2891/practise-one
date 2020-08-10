import { Component, OnInit, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from '../../appDirective/test-directive.directive';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
userName='Default Value';

  @ViewChild(TestDirectiveDirective) myDir: TestDirectiveDirective;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color) {
    this.myDir.changeBg(color);
  }
}
