import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esz-sw-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit {
  imgPath: string;
  wedSitePath: string;
  linkedinPath: string;
  constructor() { }

  ngOnInit(): void {
    this.imgPath = './assets/img/eszSoftwareLogo.png';
    this.wedSitePath = "https://eimardsobrinozurera.com/#/home";
    this.linkedinPath = "https://www.linkedin.com/in/eimardsobrinozurera/";
  }

}
