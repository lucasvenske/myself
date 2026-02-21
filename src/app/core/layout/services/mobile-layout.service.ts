import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, of, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileLayoutService {
  private readonly mediaQuery =
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 1280px)') : null;

  isMobile() {
    if (!this.mediaQuery) {
      return toSignal(of(false), { initialValue: false });
    }
    const matches = fromEvent<MediaQueryListEvent>(this.mediaQuery, 'change').pipe(
      startWith({ matches: this.mediaQuery.matches } as MediaQueryListEvent),
      map((m) => m.matches)
    );
    return toSignal(matches, { requireSync: true });
  }
}
