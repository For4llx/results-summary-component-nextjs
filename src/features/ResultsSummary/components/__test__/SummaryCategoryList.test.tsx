import { render, screen, cleanup } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import SummaryCategoryList from '../SummaryCategoryList'
import mockCategories from '../../../../../data/__mock__/categories'

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
