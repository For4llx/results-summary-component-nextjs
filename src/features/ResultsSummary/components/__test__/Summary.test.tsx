import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import Summary from '../Summary'

describe('Summary component', () => {
  afterEach(() => {
    cleanup()
  })
  it('should render the SummaryContainer', () => {
    render(<Summary categories={[]} />)
    const SummaryContainer = screen.getByRole('summary')
    expect(SummaryContainer).toBeDefined()
  })
  it('should render the SummaryHeading', () => {
    render(<Summary categories={[]} />)
    const SummaryHeading = screen.getByText('Summary')
    expect(SummaryHeading).toBeDefined()
  })
  it('should render the SummaryCategoryList', () => {
    render(<Summary categories={[]} />)
    const SummaryCategoryList = screen.getByText('Summary')
    expect(SummaryCategoryList).toBeDefined()
  })
  it('should render the SummaryButton', () => {
    render(<Summary categories={[]} />)
    const SummaryButton = screen.getByText('Continue')
    expect(SummaryButton).toBeDefined()
  })
})
