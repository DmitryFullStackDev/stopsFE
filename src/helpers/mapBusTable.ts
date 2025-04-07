export interface Stops {
    line: number;
    stop: string;
    order: number;
    time: string;
}

export interface Line {
    stop: string;
    time: string[];
}

export interface BusLines {
    [line: number]: Line[];
}

interface IntermediateResult {
    [line: number]: {
        [stop: string]: { order: number; timeInMinutes: number }[];
    };
}

interface StopsMatrix {
    [stop: string]: number;
}

export interface MapBusTableResult {
    busLines: BusLines;
    allStops: string[];
}

export const mapBusTable = (input: Stops[]): MapBusTableResult => {
    const intermediate: IntermediateResult = {};
    const stopsMatrix: StopsMatrix = {};

    for (const {line, stop, order, time} of input) {
        const timeInMinutes = time.split(':').map(Number).reduce((hours, minutes) => hours * 60 + minutes);

        stopsMatrix[stop] = 1;

        if (!intermediate[line]) {
            intermediate[line] = {};
        }

        if (!intermediate[line][stop]) {
            intermediate[line][stop] = [];
        }

        intermediate[line][stop].push({order, timeInMinutes});
    }

    const result: BusLines = {};

    for (const line in intermediate) {
        const lineNumber = +line;
        result[lineNumber] = [];

        for (const stop in intermediate[lineNumber]) {
            const stopTimes = intermediate[lineNumber][stop];

            const sortedTimes = stopTimes
                .sort((a, b) => a.timeInMinutes - b.timeInMinutes)  // Sort by time (not order)
                .map(entry => entry.timeInMinutes);

            const orderIndex = stopTimes[0].order;

            result[lineNumber][orderIndex] = {
                stop,
                time: sortedTimes.map(timeInMinutes => {
                    const hours = Math.floor(timeInMinutes / 60);
                    const minutes = timeInMinutes % 60;
                    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                })
            };
        }

        result[lineNumber] = result[lineNumber].filter(item => item !== undefined);
    }

    const allStops = Object.keys(stopsMatrix).sort();

    return {busLines: result, allStops};
};
