import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import ResultsContent from '../ResultsContent'

describe("ResultsContent component", () => {
    afterEach(() => {
        cleanup();
    });
    it("should render the ResultsContentContainer", () => {
        render(<ResultsContent />)
        const ResultsContentContainer = screen.getByRole("resultscontent")
        expect(ResultsContentContainer).toBeDefined()
    });
})
