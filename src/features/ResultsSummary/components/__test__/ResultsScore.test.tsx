import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import ResultsScore from '../ResultsScore'

describe('ResultsScore component', () => {
  afterEach(() => {
    cleanup()
  })
  it('should render the ResultsScoreContainer', () => {
    render(<ResultsScore score={0} />)
    const ResultsScoreContainer = screen.getByRole('resultsscore')
    expect(ResultsScoreContainer).toBeDefined()
  })
  it('should render the ResultsScoreResult under 4 seconds', () => {
    render(<ResultsScore score={42} />)
    setTimeout(() => {
      const ResultsScoreResult = screen.getByText('42')
      expect(ResultsScoreResult).toBeDefined()
    }, 4000)
  })
  it('should render the ResultsScoreMax', () => {
    render(<ResultsScore score={0} />)
    const ResultsScoreMax = screen.getByText('of 100')
    expect(ResultsScoreMax).toBeDefined()
  })
})
