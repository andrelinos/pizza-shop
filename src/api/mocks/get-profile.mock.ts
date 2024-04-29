import { http, HttpResponse } from 'msw'

import { GetProfileResponseProps } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponseProps>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '99999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
