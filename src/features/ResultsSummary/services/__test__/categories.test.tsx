import { test, expect, vi, afterEach } from 'vitest'
import mockCategories from '../../../../../data/__mock__/categories'
import { getCategories } from '../categories'

test('should call fetch with the correct URL', async () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  vi.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce(mockCategories),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }),
    ok: false,
    redirected: false,
    status: 0,
    statusText: '',
    type: 'basic',
    url: '',
    clone: function (): Response {
      throw new Error('Function not implemented.')
    },
    body: null,
    bodyUsed: false,
    arrayBuffer: function (): Promise<ArrayBuffer> {
      throw new Error('Function not implemented.')
    },
    blob: function (): Promise<Blob> {
      throw new Error('Function not implemented.')
    },
    formData: function (): Promise<FormData> {
      throw new Error('Function not implemented.')
    },
    text: function (): Promise<string> {
      throw new Error('Function not implemented.')
    },
  })

  const categories = await getCategories()

  expect(fetch).toHaveBeenCalledTimes(1)
  expect(categories).toEqual(mockCategories)
})
