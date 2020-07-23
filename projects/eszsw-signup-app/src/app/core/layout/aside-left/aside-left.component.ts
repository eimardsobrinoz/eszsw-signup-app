import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'eszsw-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit, AfterViewInit {
  
  imgPath: string;
  wedSitePath: string;
  linkedinPath: string;
  webSiteLinkTitle:string;
  linkedinLinkTitle:string;
  @ViewChild('asideElement', { static: true}) asideElement: ElementRef;

  constructor(private renderer2: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.fillFullHeight();
    console.log('Emiliooo: ', window.innerHeight);
  }

  ngOnInit(): void {
   this.initialize();
  }

  ngAfterViewInit(): void {
    this.fillFullHeight();
  }

  fillFullHeight() {
    this.renderer2.setStyle(this.asideElement.nativeElement, 'height', window.innerHeight + 'px' );
  }
  initialize() {
    this.imgPath = './assets/img/eszSoftwareLogo.png';
    this.wedSitePath = "https://eimardsobrinozurera.com/#/home";
    this.linkedinPath = "https://www.linkedin.com/in/eimardsobrinozurera/";
    this.webSiteLinkTitle = "Official Eimard's web site";
    this.linkedinLinkTitle = "Eimard's linkedin profile";
  }

}
