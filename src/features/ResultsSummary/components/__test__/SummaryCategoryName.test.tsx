import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import SummaryCategoryName from '../SummaryCategoryName'

describe('SummaryCategoryName component', () => {
  afterEach(() => {
    cleanup()
  })
  it('should render the ContainerCategoryName', () => {
    render(<SummaryCategoryName icon="" category="" />)
    const ContainerCategoryName = screen.getByRole('categoryname')
    expect(ContainerCategoryName).toBeDefined()
  })
  it('should render the img', () => {
    render(
      <SummaryCategoryName
        icon="./assets/images/icon-reaction.svg"
        category="Reaction"
      />
    )
    const img = screen.getByAltText('Reaction')
    expect(img).toBeDefined()
    expect(img.getAttribute('src')).toContain(
      './assets/images/icon-reaction.svg'
    )
  })
  it('should render the CategoryNameHeading', () => {
    render(<SummaryCategoryName icon="" category="Reaction" />)
    const CategoryNameHeading = screen.getByText('Reaction')
    expect(CategoryNameHeading).toBeDefined()
  })
})
