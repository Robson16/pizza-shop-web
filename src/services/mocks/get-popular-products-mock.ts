import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pepperoni', amount: 150 },
    { product: 'Calabresa', amount: 100 },
    { product: 'Mozzarella', amount: 200 },
    { product: 'Margherita', amount: 80 },
    { product: 'Formaggio', amount: 120 },
  ])
})
