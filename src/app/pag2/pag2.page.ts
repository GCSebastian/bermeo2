import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  IrHome(){
    this.router.navigate(['/home']);
  }
  IrPag3(){
    this.router.navigate(['pag3']);
  }
}

