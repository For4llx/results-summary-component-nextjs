import { ICategory } from '@/interfaces'
import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import SummaryCategory from '../SummaryCategory'

const mockCategories: ICategory[] = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]

describe("SummaryCategory component", () => {
    afterEach(() => {
        cleanup();
    });
    it("should render the CategoryContainer", () => {
        render(<SummaryCategory category={[mockCategories[0]]} color={''} />)
        const CategoryContainer = screen.getByRole("category")
        expect(CategoryContainer).toBeDefined()
    });
    it("should render the SummaryCategoryName", () => {
        render(<SummaryCategory category={[mockCategories[0]]} color={''} />)
        const SummaryCategoryName = screen.getByRole("categoryname")
        expect(SummaryCategoryName).toBeDefined()
    });
    it("should render the SummaryCategoryScore", () => {
        render(<SummaryCategory category={[mockCategories[0]]} color={''} />)
        const SummaryCategoryScore = screen.getByRole("categoryscore")
        expect(SummaryCategoryScore).toBeDefined()
    });
})
