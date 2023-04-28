import { expect, test } from 'vitest'
import { render } from "@testing-library/react"
import ResultSummary from '../'

test("test", () => {
    render(<ResultSummary categories={[]} score={0}/>)
    const demo = document.getElementById("demo")
    expect(demo).not.toBeNull()
    expect
})