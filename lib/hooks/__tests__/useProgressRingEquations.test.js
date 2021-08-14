import { renderHook } from '@testing-library/react-hooks'
import { useProgressRingEquations } from '../'

describe('useProgressRingEquations custom hook', () => {
  describe('exposes the radius, circumference and progress ring arc', () => {
    test('given progress parameter a value higher than 0', () => {
      const { result } = renderHook(useProgressRingEquations, {
        initialProps: { circleLength: 1, progress: 1 }
      })

      const { radius, circumference, progressArc } = result.current

      expect(radius).toBe(0.5)
      expect(circumference).toBe(Math.PI)
      expect(progressArc).toBe(0)
    })

    test('given progress parameter a value of 0', () => {
      const { result } = renderHook(useProgressRingEquations, {
        initialProps: { circleLength: 1, progress: 0 }
      })

      const { radius, circumference, progressArc } = result.current

      expect(radius).toBe(0.5)
      expect(circumference).toBe(Math.PI)
      expect(progressArc).toBe(circumference)
    })
  })

  test('given no parameters throws Error', () => {
    const { result } = renderHook(useProgressRingEquations)

    expect(result.error.message).toEqual(
      expect.stringMatching(/required parameter missing/i)
    )
  })
})
