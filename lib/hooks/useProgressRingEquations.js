export default function useProgressRingEquations ({
  circleLength,
  progress
} = {}) {
  if (!circleLength || isNaN(progress)) {
    throw new Error('Required parameter missing')
  }

  const radius = circleLength / 2
  const circumference = circleLength * Math.PI
  const progressArc = circumference * (1 - progress)

  return { radius, circumference, progressArc }
}
