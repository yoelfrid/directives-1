import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  
  arr1=[1,5,7,9]

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }

}
