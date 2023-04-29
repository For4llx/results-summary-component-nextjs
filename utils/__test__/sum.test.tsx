import { test, expect } from 'vitest'
import sum from '../sum'

test(
    "return sum of numbers in array", () => {
        expect(sum(1, 2, 3)).toEqual(6)
    })
