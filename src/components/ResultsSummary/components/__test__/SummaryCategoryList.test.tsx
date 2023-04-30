import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import SummaryCategoryList from '../SummaryCategoryList'

const mockCategories = [
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

describe("SummaryCategoryList component", () => {
    afterEach(() => {
        cleanup();
    });
    it("should render the CategoryListContainer", () => {
        render(<SummaryCategoryList categories={[]} />);
        const CategoryListContainer = screen.getByRole('categorylist');
        expect(CategoryListContainer).toBeDefined();
    });
    it("should render the CategoryItem", () => {
        render(<SummaryCategoryList categories={mockCategories} />);
        const CategoryItem = screen.getAllByRole("listitem");
        expect(CategoryItem).toBeDefined();
        expect(CategoryItem.length).toEqual(4);
    });
})
