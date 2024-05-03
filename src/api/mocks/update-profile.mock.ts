import { http, HttpResponse } from 'msw'

import { UpdateProfileBodyProps } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBodyProps>(
  '/profile',
  async ({ request }) => {
    const { name, description } = await request.json()

    if (name === 'Pizza Master' && description) {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
