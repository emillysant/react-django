import { render, screen } from '@testing-library/react'
// import App from './App'

describe('Jest', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })
  it.skip('should display elements', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Fornecedores/i })
    ).toBeInTheDocument()
  })
})