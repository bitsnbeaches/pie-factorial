import React from 'react'
import { useProgressRingEquations } from '../../lib/hooks'
import styles from './ProgressRing.module.css'

export type Props = {
  progress: number
  size: number
  strokeWidth: number
}

type CSSStyle = any

const ProgressRing: React.FC<Props> = ({
  progress,
  size = 100,
  strokeWidth = 5,
}: Props) => {
  const circleLength = size - strokeWidth
  const { radius, circumference, progressArc } = useProgressRingEquations({
    circleLength,
    progress,
  })
  const ariaValueNow = Math.ceil(progress * 100)

  const circleStyle = {
    '--circumference': circumference,
    '--progress': progressArc,
  } as CSSStyle

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      styleName={styles.root}
      role='progressbar'
      aria-valuenow={ariaValueNow}
      aria-valuemin={0}
      aria-valuemax={100}
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
        styleName={styles.progress_ring}
        style={circleStyle}
      />
    </svg>
  )
}

export default ProgressRing
