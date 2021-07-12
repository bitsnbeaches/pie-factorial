# \<Link />

## Description

A composed component that wraps the `HTMLAnchorElement` with both:

```ts
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'
```

<br>

### Usage

Use the `unthemed` prop to render the composed component using only `NextLink`:

```jsx
<Link href='/example' unthemed>
  Example
</Link>
```

> The `forwardedRef` and default `.active` class name are still available to this component

<br>
Use the `activeClassName` prop in order to apply custom styles to the link matching the current path:

```jsx
const styles = useStyles()

<Link
  activeClassName={styles.activeNavLink}
  href='/example'
>
  Example
</Link>
```

<br>

---

#### Reference

[@material-ui examples : nextjs-with-typescript / src / Link.tsx](https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/src/Link.tsx)
