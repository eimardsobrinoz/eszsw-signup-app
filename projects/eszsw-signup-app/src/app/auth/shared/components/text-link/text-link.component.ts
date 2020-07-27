import { Component, Input } from '@angular/core';

@Component({
  selector: 'eszsw-text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss']
})
export class TextLinkComponent {

  @Input() text: string = '';
  @Input() linkLbl: string = '';
  @Input() linkPath: string = '';
  @Input() styleClass: string = '';

  constructor() { }

}
