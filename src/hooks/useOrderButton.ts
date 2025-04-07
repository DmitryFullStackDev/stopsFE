import {ref} from "vue";

export const useOrderButton = () => {
    const isDescendingOrder = ref(false)

    const handleClickChangeOrder = () => {
        isDescendingOrder.value = !isDescendingOrder.value
    }

    return {isDescendingOrder, handleClickChangeOrder}
}
