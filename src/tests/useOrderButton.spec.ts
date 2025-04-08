import {describe, expect, it} from 'vitest'
import {useOrderButton} from 'src/hooks/useOrderButton' // Adjust the path to your actual file

describe('useOrderButton', () => {
    it('should toggle isDescendingOrder on handleClickChangeOrder', () => {
        const {isDescendingOrder, handleClickChangeOrder} = useOrderButton()

        expect(isDescendingOrder.value).toBe(false)

        handleClickChangeOrder()
        expect(isDescendingOrder.value).toBe(true)

        handleClickChangeOrder()
        expect(isDescendingOrder.value).toBe(false)
    })
})
