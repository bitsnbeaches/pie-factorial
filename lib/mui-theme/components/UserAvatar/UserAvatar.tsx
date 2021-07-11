import * as React from 'react'

import Avatar, { AvatarProps } from '@material-ui/core/Avatar'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

function UserAvatar({dropdown, ...props}: UserAvatarProps) {
  const userMenuIcon = React.useMemo(() => dropdown && <KeyboardArrowDownIcon />, [dropdown])

  return (
    <>
      <Avatar {...props} />
      {userMenuIcon}
    </>
  )
}

export type UserAvatarProps = {
  dropdown?: boolean
} & AvatarProps

export default UserAvatar
