import {describe, expect, it} from 'vitest'
import {mapBusTable, MapBusTableResult, Stops} from 'src/helpers/mapBusTable'

describe('mapBusTable', () => {
    it('correctly processes a basic input', () => {
        const input: Stops[] = [
            {line: 1, stop: 'A', order: 0, time: '08:00'},
            {line: 1, stop: 'B', order: 1, time: '08:30'},
            {line: 1, stop: 'A', order: 1, time: '08:15'},
            {line: 2, stop: 'A', order: 0, time: '09:00'},
            {line: 2, stop: 'B', order: 1, time: '09:30'},
        ]

        const expectedOutput: MapBusTableResult = {
            busLines: {
                1: [
                    {stop: 'A', time: ['08:00', '08:15']},
                    {stop: 'B', time: ['08:30']},
                ],
                2: [
                    {stop: 'A', time: ['09:00']},
                    {stop: 'B', time: ['09:30']},
                ],
            },
            allStops: ['A', 'B'],
        }

        const result = mapBusTable(input)

        expect(result).toEqual(expectedOutput)
    })

    it('sorts times correctly', () => {
        const input: Stops[] = [
            {line: 1, stop: 'A', order: 0, time: '09:00'},
            {line: 1, stop: 'A', order: 1, time: '08:00'},
            {line: 1, stop: 'A', order: 2, time: '07:30'},
        ]

        const expectedOutput: MapBusTableResult = {
            busLines: {
                1: [
                    {stop: 'A', time: ['07:30', '08:00', '09:00']},
                ],
            },
            allStops: ['A'],
        }

        const result = mapBusTable(input)

        expect(result).toEqual(expectedOutput)
    })

    it('handles empty input correctly', () => {
        const input: Stops[] = []

        const expectedOutput: MapBusTableResult = {
            busLines: {},
            allStops: [],
        }

        const result = mapBusTable(input)

        expect(result).toEqual(expectedOutput)
    })

    it('handles missing stops and lines', () => {
        const input: Stops[] = [
            {line: 1, stop: 'A', order: 0, time: '08:00'},
            {line: 1, stop: 'B', order: 1, time: '09:00'},
            {line: 2, stop: 'A', order: 0, time: '10:00'},
        ]

        const expectedOutput: MapBusTableResult = {
            busLines: {
                1: [
                    {stop: 'A', time: ['08:00']},
                    {stop: 'B', time: ['09:00']},
                ],
                2: [
                    {stop: 'A', time: ['10:00']},
                ],
            },
            allStops: ['A', 'B'],
        }

        const result = mapBusTable(input)

        expect(result).toEqual(expectedOutput)
    })

    it('returns stops sorted alphabetically', () => {
        const input: Stops[] = [
            {line: 1, stop: 'B', order: 0, time: '08:00'},
            {line: 1, stop: 'A', order: 1, time: '09:00'},
        ]

        const expectedOutput: MapBusTableResult = {
            busLines: {
                1: [
                    {stop: 'B', time: ['08:00']},
                    {stop: 'A', time: ['09:00']},
                ],
            },
            allStops: ['A', 'B'],
        }

        const result = mapBusTable(input)

        expect(result).toEqual(expectedOutput)
    })
})
