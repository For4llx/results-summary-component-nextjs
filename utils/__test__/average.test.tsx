import { test, expect } from 'vitest'
import average from '../average'

test(
    "return the average", () => {
        expect(average(305, 4)).toEqual(76)
    })
