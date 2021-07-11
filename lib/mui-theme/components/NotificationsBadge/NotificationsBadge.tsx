import * as React from 'react'
import Badge from '@material-ui/core/Badge'

import { NotificationIcon, NotificationIconVariants } from '.'

function NotificationsBadge({ count, status }: NotificationsBadgeProps) {
  return (
    <Badge badgeContent={count} color='primary' variant='dot'>
      <NotificationIcon variant={status} />
    </Badge>
  )
}

export type NotificationsBadgeProps = {
  count?: number | null
  status?: NotificationIconVariants
}

export default NotificationsBadge
