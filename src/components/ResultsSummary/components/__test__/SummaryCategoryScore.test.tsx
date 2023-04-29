import { render, screen } from '@testing-library/react'
import {test, expect } from 'vitest'
import SummaryCategoryScore from '../SummaryCategoryScore'

test("should render", () => {
    render(<SummaryCategoryScore score={76} />)
    const container = screen.getByRole("categoryscore")
    expect(container.textContent).toBe("76 / 100")
})
