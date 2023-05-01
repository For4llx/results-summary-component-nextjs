import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import SummaryCategoryScore from '../SummaryCategoryScore'

describe("SummaryCategoryScore component", () => {
    afterEach(() => {
        cleanup();
    });
    it("should render the ContainerCategoryScore", () => {
        render(<SummaryCategoryScore score={50} />)
        const ContainerCategoryScore = screen.getByRole('categoryscore');
        expect(ContainerCategoryScore).toBeDefined();
    });
    it("should render the CategoryScore", () => {
        render(<SummaryCategoryScore score={50} />)
        const CategoryScore = screen.getByText('50');
        expect(CategoryScore).toBeDefined();
    });
    it("should render the CategoryScoreMax", () => {
        render(<SummaryCategoryScore score={50} />)
        const CategoryScoreMax = screen.getByText('/ 100');
        expect(CategoryScoreMax).toBeDefined();
    });
})
