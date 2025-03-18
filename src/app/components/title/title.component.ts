import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  imports: [CommonModule], 
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() text!: string;
  @Input() size!: string;
  @Input() fontWeight!: string;
  @Input() lineHeight!: string;
  @Input() textAlign!: string;
}
