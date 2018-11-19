import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  constructor(private router: Router) { }

  powrot() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
