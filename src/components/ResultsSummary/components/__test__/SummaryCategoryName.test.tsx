import { render, screen } from '@testing-library/react'
import {test, expect } from 'vitest'
import SummaryCategoryName from '../SummaryCategoryName'

test("should render", () => {
    render(<SummaryCategoryName icon='./assets/images/icon-reaction.svg' category='Reaction'/>)
    const container = screen.getByRole("categoryname")
    expect(container.textContent).toBe("Reaction")
    expect(container).toBe("./assets/images/icon-reaction.svg")
})
