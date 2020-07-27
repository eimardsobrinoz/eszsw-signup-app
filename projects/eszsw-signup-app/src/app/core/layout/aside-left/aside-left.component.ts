import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'eszsw-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit, AfterViewInit {
  
  @ViewChild('asideElement') asideElement: ElementRef;

  public imgPath: string;
  public wedSitePath: string;
  public linkedinPath: string;
  public webSiteLinkTitle:string;
  public linkedinLinkTitle:string;
  public documentPath:string;
  public documentTitle:string;

  constructor(private renderer2: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.fillFullHeight();
  }

  ngOnInit(): void {
   this.initialize();
  }

  ngAfterViewInit(): void {
    this.fillFullHeight();
  }

  public initialize(): void {
    this.imgPath = './assets/img/eszSoftwareLogo.png';
    this.wedSitePath = "https://eimardsobrinozurera.com/#/home";
    this.linkedinPath = "https://www.linkedin.com/in/eimardsobrinozurera/";
    this.webSiteLinkTitle = "Official Eimard's web site";
    this.linkedinLinkTitle = "Eimard's linkedin profile";
    this.documentPath = "./assets/pdf/SignUp-project_Eimard_DOCUMENTATION.pdf";
    this.documentTitle = "Project documentation";
  }

  public fillFullHeight(): void {
    this.renderer2.setStyle(this.asideElement.nativeElement, 'height', window.innerHeight + 'px' );
  }

}
