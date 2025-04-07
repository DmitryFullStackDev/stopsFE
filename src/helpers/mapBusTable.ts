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
        [stop: string]: { order: number; time: string }[];
    };
}

interface StopsMatrix {
    [stop: string]: number
}

export interface MapBusTableResult {
    busLines: BusLines;
    allStops: string[]
}

export const mapBusTable = (input: Stops[]): MapBusTableResult => {
    const intermediate: IntermediateResult = {};
    const stopsMatrix: StopsMatrix = {}

    for (const {line, stop, order, time} of input) {
        if (!stopsMatrix[stop]) {
            stopsMatrix[stop] = 1
        }

        if (!intermediate[line]) {
            intermediate[line] = {};
        }

        if (!intermediate[line][stop]) {
            intermediate[line][stop] = [];
        }

        intermediate[line][stop].push({order, time});
    }

    const result: BusLines = {};

    for (const line in intermediate) {
        result[+line] = [];

        for (const stop in intermediate[+line]) {
            const index = intermediate[+line][stop][0].order
            const time = intermediate[+line][stop]
                .sort((a, b) => {
                    const [aHours, aMinutes] = a.time.split(':').map(Number);
                    const [bHours, bMinutes] = b.time.split(':').map(Number);
                    return aHours * 60 + aMinutes - (bHours * 60 + bMinutes);
                })
                .map(entry => entry.time);

            result[+line][index] = {
                stop,
                time,
            }
        }

        result[+line] = result[+line].filter(item => item !== null);
    }

    const allStops = Object.keys(stopsMatrix).sort()

    return {busLines: result, allStops}
}

