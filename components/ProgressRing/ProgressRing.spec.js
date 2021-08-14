import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import { ProgressRing } from '../'

describe('<ProgressRing />', () => {
  const defaultProps = ProgressRing.defaultProps
  const createElements = props => render(<ProgressRing {...props} />)

  test('given only required props renders successfully with other default props', () => {
    const { getByRole } = createElements({ progress: 0.13 })
    const svgRoot = getByRole('progressbar')
    const circleElement = svgRoot.querySelector('circle')

    expect(svgRoot).toHaveAttribute('width', defaultProps.size)
    expect(circleElement).toHaveAttribute(
      'stroke-width',
      defaultProps.strokeWidth
    )
  })

  test('given no required props throws Error', () => {
    expect(() => createElements()).toThrow(/required parameter missing/i)
  })
})
