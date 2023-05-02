import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import mockCategories from '../../../../../data/__mock__/categories'
import SummaryCategory from '../SummaryCategory'

describe('SummaryCategory component', () => {
  afterEach(() => {
    cleanup()
  })
  it('should render the CategoryContainer', () => {
    render(<SummaryCategory category={[mockCategories[0]]} color={''} />)
    const CategoryContainer = screen.getByRole('category')
    expect(CategoryContainer).toBeDefined()
  })
  it('should render the SummaryCategoryName', () => {
    render(<SummaryCategory category={[mockCategories[0]]} color={''} />)
    const SummaryCategoryName = screen.getByRole('categoryname')
    expect(SummaryCategoryName).toBeDefined()
  })
  it('should render the SummaryCategoryScore', () => {
    render(<SummaryCategory category={[mockCategories[0]]} color={''} />)
    const SummaryCategoryScore = screen.getByRole('categoryscore')
    expect(SummaryCategoryScore).toBeDefined()
  })
})
