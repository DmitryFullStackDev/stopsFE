export interface Stops {
    line: number;
    stop: string;
    order: number;
    time: string;
}

export interface BusLines {
    [line: number]: {
        [stop: string]: string[];
    };
}

interface IntermediateResult {
    [line: number]: {
        [stop: string]: { order: number; time: string }[];
    };
}

export const mapBusTable = (input: Stops[]): BusLines => {
    const intermediate: IntermediateResult = {};

    for (const {line, stop, order, time} of input) {
        if (!intermediate[line]) {
            intermediate[line] = {};
        }

        if (!intermediate[line][stop]) {
            intermediate[line][stop] = [];
        }

        intermediate[line][stop].push({order, time});
    }
    console.log(intermediate)
    const result: BusLines = {};

    for (const line in intermediate) {
        result[+line] = {};

        for (const stop in intermediate[+line]) {
            result[+line][stop] = intermediate[+line][stop]
                .sort((a, b) => {
                    const [aHours, aMinutes] = a.time.split(':').map(Number);
                    const [bHours, bMinutes] = b.time.split(':').map(Number);
                    return aHours * 60 + aMinutes - (bHours * 60 + bMinutes);
                })
                .map(entry => entry.time);
        }
    }

    return result
}

