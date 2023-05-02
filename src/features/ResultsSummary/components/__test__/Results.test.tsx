import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import Results from '../Results'

describe('Results component', () => {
  afterEach(() => {
    cleanup()
  })
  it('should render the ResultsContainer', () => {
    render(<Results score={0} />)
    const ResultsContainer = screen.getByRole('results')
    expect(ResultsContainer).toBeDefined()
  })
  it('should render the ResultsScore', () => {
    render(<Results score={0} />)
    const ResultsScore = screen.getByRole('resultsscore')
    expect(ResultsScore).toBeDefined()
  })
  it('should render the ResultsContent', () => {
    render(<Results score={0} />)
    const ResultsContent = screen.getByRole('resultscontent')
    expect(ResultsContent).toBeDefined()
  })
})
