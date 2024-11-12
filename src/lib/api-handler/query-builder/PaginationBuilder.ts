export type PaginationProps = {
  page: number;
  total?: number;
  size: number;
};

export class PaginationBuilder {
  paginationProps: PaginationProps = {
    page: 1,
    size: 10,
    total: 0,
  };

  public setPage(page: number) {
    this.paginationProps.page = page;
  }

  public setSize(size: number) {
    this.paginationProps.size = size;
  }

  /**
   *
   * @returns
   */
  public build(): any {
    return {
      page: this.paginationProps.page,
      limit: this.paginationProps.size,
    };
  }
}
