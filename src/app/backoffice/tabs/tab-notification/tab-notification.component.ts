// tab-notification.component.ts
import { Component } from '@angular/core';
import { TruncateTextPipe } from '../../../services/pipes/truncate-text.pipe';

@Component({
  selector: 'app-tab-notification',
  standalone: true,
  imports: [
    TruncateTextPipe,
  ],
  templateUrl: './tab-notification.component.html',
  styleUrls: ['./tab-notification.component.scss']
})
export class TabNotificationComponent {
  someText = 'This is a long string that needs to be truncated';
}