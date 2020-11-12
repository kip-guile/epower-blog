import React from 'react'
import Main from '../pages/main'
import { render } from '../utils/render'

describe('<Board />', () => {
  test('Renders all the elements', async (done) => {
    const container = render(<Main />)
    // ???
    const { findByText, findByTestId } = container
    expect(await findByText('Copyright 2020')).toBeVisible()
    // expect(await findByText('Board')).toBeVisible()
    // expect(await findByTestId('trello_view')).toBeVisible()
    // expect(await findByText('Activity')).toBeVisible()
    // expect(await findByText('Archived Tasks')).toBeVisible()
    done()
  })
})
