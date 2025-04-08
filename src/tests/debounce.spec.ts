import {describe, expect, it, vi} from 'vitest'
import {debounce} from 'src/helpers/debounce'

describe('debounce function', () => {
    it('should call the function only after the final call within the debounce delay', async () => {
        const fn = vi.fn();
        const debouncedFn = debounce(fn, 200);

        debouncedFn();
        await new Promise((resolve) => setTimeout(resolve, 50));
        debouncedFn();
        await new Promise((resolve) => setTimeout(resolve, 50));
        debouncedFn();

        await new Promise((resolve) => setTimeout(resolve, 250));

        expect(fn).toHaveBeenCalledTimes(1);  // Should be called exactly once
    });
});
