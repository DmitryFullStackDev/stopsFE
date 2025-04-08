import {describe, expect, it, vi} from 'vitest'
import {throttle} from 'src/helpers/throttle'

describe('throttle function', () => {
    it('should call the function only once within the throttle limit', async () => {
        const fn = vi.fn();
        const throttledFn = throttle(fn, 100);

        throttledFn();
        throttledFn();
        throttledFn();

        await new Promise((resolve) => setTimeout(resolve, 150));

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should call the function multiple times after the throttle period', async () => {
        const fn = vi.fn();
        const throttledFn = throttle(fn, 100);

        throttledFn();
        await new Promise((resolve) => setTimeout(resolve, 110));
        throttledFn();

        await new Promise((resolve) => setTimeout(resolve, 150));

        expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should handle no calls within the throttle period', async () => {
        const fn = vi.fn();
        const throttledFn = throttle(fn, 100);

        throttledFn();

        await new Promise((resolve) => setTimeout(resolve, 50));

        expect(fn).toHaveBeenCalledTimes(1);
    });
})
