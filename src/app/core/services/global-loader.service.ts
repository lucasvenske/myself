import { Injectable, inject } from '@angular/core';
import { LoaderService } from '../../components/loader/loader.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalLoaderService {
    private loaderService = inject(LoaderService);

    /**
     * Show the global loader
     */
    show(): void {
        this.loaderService.show();
    }

    /**
     * Hide the global loader
     */
    hide(): void {
        this.loaderService.hide();
    }

    /**
     * Show the loader for a specified duration (in milliseconds)
     * @param duration Duration in milliseconds
     * @returns Promise that resolves when the loader is hidden
     */
    showFor(duration: number): Promise<void> {
        this.show();

        return new Promise((resolve) => {
            setTimeout(() => {
                this.hide();
                resolve();
            }, duration);
        });
    }

    /**
     * Use this method to wrap asynchronous operations with the loader
     * @param operation The async operation to perform
     * @returns Promise with the operation result
     */
    async withLoading<T>(operation: Promise<T>): Promise<T> {
        this.show();
        try {
            return await operation;
        } finally {
            this.hide();
        }
    }
}