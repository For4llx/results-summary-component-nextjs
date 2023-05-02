import { test, expect, vi, afterEach } from 'vitest'
import { getCategories } from '../categories'

const mockCategories = [
  {
    id: 1,
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
  },
  {
    id: 2,
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
  },
  {
    id: 3,
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
  },
  {
    id: 4,
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
  },
]

test('should call fetch with the correct URL', async () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  //@ts-ignore
  vi.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce(mockCategories),
  })

  const categories = await getCategories()

  expect(fetch).toHaveBeenCalledTimes(1)
  expect(categories).toEqual(mockCategories)
})
