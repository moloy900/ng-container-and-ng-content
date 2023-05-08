import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  data: any = [];
  addMore(val: any) {
    this.data.push({
      name: val.value,
    });

    if (this.data.length > 3) {
      // if you navigate any component use
      // 1. Inject Router service in constructor() example:  constructor(private route:Router){}
      // 2. then type this.route.navigate(['products'])

      this.route.navigate(['products']);
    }
  }
  removeItem(item: any) {
    this.data.splice(item, 1);
  }
}
