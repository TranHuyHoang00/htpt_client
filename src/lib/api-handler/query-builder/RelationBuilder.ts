export class RelationBuilder {
  protected relations: string[] = []

  /**
   *
   * @param relation
   */
  public withRelation(relation: string) {
    if (!this.relations?.includes(relation)) {
      this.relations.push(relation)
    }
  }

  /**
   *
   * @param {*} relations
   */
  public withRelations(relations: string[]) {
    this.relations = relations
  }

  /**
   *
   * @param {*} relation
   */
  public removeRelation(relation: string) {
    const idx = this.relations?.findIndex((r) => {
      return relation == r
    })

    if (idx >= 0) {
      this.relations?.splice(idx, 1)
    }
  }

  public removeRelations() {
    this.relations = []
  }

  public build() {
    if (this.relations?.length <= 0) {
      return {}
    }
    return {
      with: this.relations?.join(';'),
    }
  }
}
