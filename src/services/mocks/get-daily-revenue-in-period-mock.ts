import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/12/2025', receipt: 200000 },
    { date: '02/12/2025', receipt: 120000 },
    { date: '03/12/2025', receipt: 160000 },
    { date: '04/12/2025', receipt: 100000 },
    { date: '05/12/2025', receipt: 190000 },
    { date: '06/12/2025', receipt: 130000 },
    { date: '07/12/2025', receipt: 120000 },
  ])
})
