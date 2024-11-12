type FilterProps = {
  field: string
  value: string
  relation?: string
}

export class FilterBuilder {
  protected filterProps: FilterProps[] = []
}
