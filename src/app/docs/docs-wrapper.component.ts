import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-docs-wrapper',
  standalone: true,
  imports: [NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, RouterOutlet],
  template: `
    <ng-doc-root>
      <ng-doc-navbar>
        <h3 style="margin: 0" ngDocNavbarLeft>Docs</h3>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
    </ng-doc-root>
  `,
})
export class DocsWrapperComponent {}
