import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule], 
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() color!: string;
  @Input() background!: string;
  @Input() border!: string;
  @Input() borderRadius!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() weight!: string;
}
