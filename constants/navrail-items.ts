import routes, { RouteItem } from './routes'

const navrailItems: MenuItem[] = routes.map((route: MenuItem) => {
  if (route.label.includes('group')) {
    route.disabled = true
  }

  return route
})

export type MenuItem = {
  disabled?: boolean
} & RouteItem

export default navrailItems
