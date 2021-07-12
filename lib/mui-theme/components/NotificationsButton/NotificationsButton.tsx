import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'

import {
  NotificationsBadge,
  NotificationIconVariants
} from '../NotificationsBadge'

const COUNT = 3
const STATUS = 'unread' as NotificationIconVariants

function NotificationsButton ({ onClick }: NotificationsButtonProps) {
  const [{ status, totalOfNotifications }] = React.useState({
    status: STATUS,
    totalOfNotifications: COUNT
  })

  return (
    <IconButton
      aria-label={`Read ${totalOfNotifications} new notifications`}
      color='inherit'
      onClick={onClick}
    >
      <NotificationsBadge count={totalOfNotifications} status={status} />
    </IconButton>
  )
}

export type NotificationsButtonProps = {
  onClick?: () => void
}

export default NotificationsButton
