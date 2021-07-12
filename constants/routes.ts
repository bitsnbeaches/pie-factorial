import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import SettingsIcon from '@material-ui/icons/Settings'
import SvgIcon from '@material-ui/core/SvgIcon'

export enum Paths {
  Checklist = '/checklist-sample',
  Create = '/create',
  Index = '/',
  Login = '/login',
  NewProfile = '/new-profile',
  Profile = '/profile',
  Settings = '/settings',
  Visualize = '/visualize'
}

const routes: RouteItem[] = [
  { href: Paths.Visualize, icon: BubbleChartIcon, label: 'visualize' },
  { href: Paths.Create, icon: FiberSmartRecordIcon, label: 'create' },
  { href: '/group', icon: GroupWorkIcon, label: 'group' },
  { href: Paths.Settings, icon: SettingsIcon, label: 'settings' }
]

export type RouteItem = {
  href: string
  icon: typeof SvgIcon
  label: string
}

export default routes
