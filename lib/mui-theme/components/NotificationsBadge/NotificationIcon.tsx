import * as React from 'react'

import NotificationsOff from '@material-ui/icons/NotificationsOffOutlined'
import UnreadNotifications from '@material-ui/icons/NotificationsActiveOutlined'
import ZeroNotifications from '@material-ui/icons/NotificationsNoneOutlined'

export default function NotificationIcon ({ variant }: NotificationIconProps) {
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
