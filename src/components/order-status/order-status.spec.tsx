import { render } from '@testing-library/react'

import { OrderStatus } from '.'

describe('Order Status is', () => {
  it('should display the right text based on order status is pending', () => {
    /* PENDING */
    const wrapper = render(<OrderStatus status="pending" />)

    const orderStatusBadge = wrapper.getByTestId('badge')
    const orderStatusText = wrapper.getByText('Pendente')

    expect(orderStatusBadge).toHaveClass('bg-slate-400')
    expect(orderStatusText).toBeInTheDocument()
  })

  it('should display the right text based on order status is processing', () => {
    /* PROCESSING */
    const wrapper = render(<OrderStatus status="processing" />)

    const orderStatusBadge = wrapper.getByTestId('badge')
    const orderStatusText = wrapper.getByText('Preparando')

    expect(orderStatusBadge).toHaveClass('bg-blue-500')
    expect(orderStatusText).toBeInTheDocument()
  })

  it('should display the right text based on order status is delivering', () => {
    /* DELIVERING */
    const wrapper = render(<OrderStatus status="delivering" />)

    const orderStatusBadge = wrapper.getByTestId('badge')
    const orderStatusText = wrapper.getByText('Enviado')

    expect(orderStatusBadge).toHaveClass('bg-amber-500')
    expect(orderStatusText).toBeInTheDocument()
  })

  it('should display the right text based on order status is delivered', () => {
    /* DELIVERED */
    const wrapper = render(<OrderStatus status="delivered" />)

    const orderStatusBadge = wrapper.getByTestId('badge')
    const orderStatusText = wrapper.getByText('Entregue')

    expect(orderStatusBadge).toHaveClass('bg-emerald-500')
    expect(orderStatusText).toBeInTheDocument()
  })

  it('should display the right text based on order status is canceled', () => {
    /* CANCELED */
    const wrapper = render(<OrderStatus status="canceled" />)

    const orderStatusBadge = wrapper.getByTestId('badge')
    const orderStatusText = wrapper.getByText('Cancelado')

    expect(orderStatusBadge).toHaveClass('bg-rose-500')
    expect(orderStatusText).toBeInTheDocument()
  })
})
