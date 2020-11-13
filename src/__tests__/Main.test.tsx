import React from 'react'
import Main from '../pages/main'
import { render } from '../utils/render'

describe('<Main />', () => {
  test('Renders all the elements', async () => {
    const container = render(<Main />)
    const { findByText } = container
    expect(await findByText('Copyright 2020')).toBeVisible()
    expect(await findByText('Epower Blog')).toBeVisible()
  })
})
