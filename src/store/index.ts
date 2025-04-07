import {createStore} from 'vuex'
import stopsModule, {StopsState} from './modules/stops'

export interface RootState {
    stops: StopsState
}

export default createStore<RootState>({
    modules: {
        stops: stopsModule,
    },
})
