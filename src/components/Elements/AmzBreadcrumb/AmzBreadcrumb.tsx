import { Breadcrumb as AntdBreadcrumb, BreadcrumbProps } from 'antd'

export type AmzBreadcrumbProps = BreadcrumbProps & {}

export const AmzBreadcrumb = ({ ...props }: AmzBreadcrumbProps) => {
  return <AntdBreadcrumb {...props} />
}

AmzBreadcrumb.displayName = 'AmzBreadcrumb'
