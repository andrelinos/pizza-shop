import { api } from '@/lib/axios'

export interface RegisterRestaurantBodyProps {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBodyProps) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
