import React from 'react'
import { oneOfType, number, string } from 'prop-types'

import { useProgressRingEquations } from 'components/hooks'
import './ProgressRing.module.css'

const propTypes = {
  progress: oneOfType([number, string]).isRequired,
  size: oneOfType([number, string]),
  strokeWidth: oneOfType([number, string])
}

const defaultProps = {
  size: '100',
  strokeWidth: '5'
}

export default function ProgressRing ({ progress, size, strokeWidth }) {
  const circleLength = size - strokeWidth
  const { radius, circumference, progressArc } = useProgressRingEquations({
    circleLength,
    progress
  })
  const ariaValueNow = `${Math.ceil(progress * 100)}`

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      styleName='root'
      role='progressbar'
      aria-valuenow={ariaValueNow}
      aria-valuemin='0'
      aria-valuemax='100'
      aria-valuetext={`${ariaValueNow}%`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        aria-hidden='true'
        cx={size / 2}
        cy={size / 2}
        fill='transparent'
        r={radius}
        strokeWidth={strokeWidth}
        styleName='progress-ring'
        style={{
          '--circumference': circumference,
          '--progress': progressArc
        }}
      />
    </svg>
  )
}

ProgressRing.propTypes = propTypes
ProgressRing.defaultProps = defaultProps
