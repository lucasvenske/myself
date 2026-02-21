import { Injectable, signal } from '@angular/core';


function getCurrentMonthRange(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    // Get last day of the month
    const lastDay = new Date(year, now.getMonth() + 1, 0).getDate();
    return `${year}-${month}-01_to_${year}-${month}-${String(lastDay).padStart(2, '0')}`;
}

@Injectable({ providedIn: 'root' })
export class GlobalFilterService {
    readonly selectedRange = signal<string>(getCurrentMonthRange());

    setSelectedRange(value: string) {
        this.selectedRange.set(value);
    }
}
