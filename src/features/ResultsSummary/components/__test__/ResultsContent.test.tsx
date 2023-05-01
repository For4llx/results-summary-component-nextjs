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
    it("should render the ResultsContentHeading", () => {
        render(<ResultsContent />)
        const ResultsContentHeading = screen.getByText("Great")
        expect(ResultsContentHeading).toBeDefined()
    });
    it("should render the ResultsContentParagraph", () => {
        render(<ResultsContent />)
        const ResultsContentParagraph = screen.getByText(`Your performance exceed 65% of the people conducting the test here!`)
        expect(ResultsContentParagraph).toBeDefined()
    });
})
