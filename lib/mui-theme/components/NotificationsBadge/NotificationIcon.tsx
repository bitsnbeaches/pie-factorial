import * as React from 'react'

import ZeroNotifications from '@material-ui/icons/NotificationsNoneOutlined'
import UnreadNotifications from '@material-ui/icons/NotificationsActiveOutlined'
import NotificationsOff from '@material-ui/icons/NotificationsOffOutlined'

function NotificationIcon ({ variant }: NotificationIconProps) {
  const CurrentIcon = React.useMemo(
    () =>
      ({
        none: ZeroNotifications,
        off: NotificationsOff,
        unread: UnreadNotifications
      }[variant]),
    [variant]
  )

  return <CurrentIcon />
}

export type NotificationIconVariants = 'none' | 'off' | 'unread'

export type NotificationIconProps = {
  variant?: NotificationIconVariants
}

export default NotificationIcon
