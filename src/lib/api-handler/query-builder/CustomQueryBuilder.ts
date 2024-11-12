export type CustomQueryProps = {
  key: string
  value: string
}

export class CustomQueryBuilder {
  protected queries: CustomQueryProps[] = []

  public setQueries(queries: CustomQueryProps[]) {
    this.queries = queries
  }

  /**
   *
   * @param query
   */
  public setQueryProps(query: CustomQueryProps) {
    this.setQuery(query.key, query.value)
  }

  /**
   *
   * @param key
   * @param value
   */
  public setQuery(key: string, value: string) {
    const foundIdx = this.queries.findIndex((item) => item.key == key)

    if (foundIdx) {
      this.queries[foundIdx] = {
        key: key,
        value: value,
      }
    } else {
      this.queries.push({
        key: key,
        value: value,
      })
    }
  }

  /**
   *
   * @param key
   */
  public deleteQuery(key: string) {
    const foundIdx = this.queries.findIndex((item) => item.key == key)

    if (foundIdx) {
      this.queries.splice(foundIdx, 1)
    }
  }

  public build() {
    return this.queries
  }
}
