import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUrl } from '@ng-template-khan-esdras/shared/utils';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ng-template-khan-esdras-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` TeSAD ASDSAD `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly baseUrl = inject(BaseUrl);
}
