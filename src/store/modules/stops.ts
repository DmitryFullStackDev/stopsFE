import axios from 'axios'
import {ActionContext, GetterTree} from 'vuex'
import {RootState} from "@/store";
import {BusLines, mapBusTable, MapBusTableResult, Stops} from "@/helpers/mapBusTable";

export interface StopsState {
    busLines: BusLines | null
    loading: boolean
    error: string | null
    activeBusLine: number
    activeBusStop: number
    allStops: string[]
}

const state: StopsState = {
    busLines: null,
    loading: false,
    error: null,
    activeBusLine: -1,
    activeBusStop: -1,
    allStops: [],
}

const mutations = {
    setLoading(state: StopsState, payload: boolean) {
        state.loading = payload
    },
    setStops(state: StopsState, payload: MapBusTableResult) {
        state.busLines = payload.busLines
        state.allStops = payload.allStops
    },
    setError(state: StopsState, error: string | null) {
        state.error = error
    },
    setActiveBusLine(state: StopsState, payload: number) {
        state.activeBusLine = payload
        state.activeBusStop = -1
    },
    setActiveBusStop(state: StopsState, payload: number) {
        state.activeBusStop = payload
    },
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const actions = {
    async fetchStops({commit, state}: ActionContext<StopsState, RootState>) {
        commit('setLoading', true)
        commit('setError', null)
        try {
            const response = await axios.get<Stops[]>('https://stops-be-dmitryfullstackdevs-projects.vercel.app/stops')
            await sleep(2000)
            const result = mapBusTable(response.data)
            commit('setStops', result)
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
    busLines: (state: StopsState): BusLines | null => state.busLines,
    loading: (state: StopsState): boolean => state.loading,
    error: (state: StopsState): string | null => state.error,
    activeBusLine: (state: StopsState): number => state.activeBusLine,
    activeBusStop: (state: StopsState): number => state.activeBusStop,
    allStops: (state: StopsState): string[] => state.allStops,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
