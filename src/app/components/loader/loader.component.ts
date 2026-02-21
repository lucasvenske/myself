import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `@if (loading()) {<div>Loading...</div>}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoaderComponent {
  private loaderService = inject(LoaderService);

  protected readonly loading = computed(() => this.loaderService.loading());
}