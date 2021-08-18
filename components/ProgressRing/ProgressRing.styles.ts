import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {
  circumference: number
  progressArc: number
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => {
  return createStyles({
    root: {
      display: 'block',
    },
    progress: {
      fill: 'none',
      stroke: theme.palette.primary.contrastText,
      strokeDasharray: ({ circumference }) => `${circumference}, 0`,
      strokeDashoffset: ({ circumference }) => `${circumference}, 0`,
      strokeLinecap: 'butt',
      transform: 'rotate(-90deg)',
      transformOrigin: '50% 50%',
      animation: '1.2s cubic-bezier(0.86, 0, 0.07, 1) 0.5s forwards',
      animationName: '$fillin',
    },
    '@keyframes fillin': {
      from: {
        strokeDasharray: ({ circumference }) => `${circumference}, 0`,
      },
      to: {
        strokeDasharray: ({ progressArc }) => `${progressArc}, 0`,
      },
    },
  })
})

export { useStyles }
