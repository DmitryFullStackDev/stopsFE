import axios from 'axios'
import {ActionContext, GetterTree} from 'vuex'
import {RootState} from "@/store";
import {BusLines, mapBusTable, Stops} from "@/helpers/mapBusTable";

export interface StopsState {
    busLines: BusLines[] | null
    loading: boolean
    error: string | null
    activeBusLine: number
    activeBusStop: string | null
}

const state: StopsState = {
    busLines: null,
    loading: false,
    error: null,
    activeBusLine: -1,
    activeBusStop: null,
}

const mutations = {
    setLoading(state: StopsState, payload: boolean) {
        state.loading = payload
    },
    setStops(state: StopsState, payload: BusLines[]) {
        state.busLines = payload
    },
    setError(state: StopsState, error: string | null) {
        state.error = error
    },
    setActiveBusLine(state: StopsState, payload: number) {
        state.activeBusLine = payload
    },
    setActiveBusStop(state: StopsState, payload: string) {
        state.activeBusStop = payload
    },
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const actions = {
    async fetchStops({commit}: ActionContext<StopsState, RootState>) {
        commit('setLoading', true)
        commit('setError', null)
        try {
            const response = await axios.get<Stops[]>('http://localhost:3000/stops')
            // await sleep(2000)
            commit('setStops', mapBusTable(response.data))
        } catch (error: any) {
            commit('setError', error.message || 'Error fetching stops')
        } finally {
            commit('setLoading', false)
        }
    },
    setActiveBusLine({commit}: ActionContext<StopsState, RootState>, payload: number) {
        commit('setActiveBusLine', payload)
    },
    setActiveBusStop({commit}: ActionContext<StopsState, RootState>, payload: string) {
        commit('setActiveBusStop', payload)
    },
}

const getters: GetterTree<typeof state, RootState> = {
    busLines: (state: StopsState): BusLines[] | null => state.busLines,
    loading: (state: StopsState): boolean => state.loading,
    error: (state: StopsState): string | null => state.error,
    activeBusLine: (state: StopsState): number => state.activeBusLine,
    activeBusStop: (state: StopsState): string | null => state.activeBusStop,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
