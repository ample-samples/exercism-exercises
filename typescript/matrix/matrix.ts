export class Matrix {
  private _all: string;

  constructor(matrix: string) {
    this._all = matrix;
  }

  public get rows(): number[][]  {
    const rowSplit = this._all.split('\n');
    let rows: number[][] = [];

    for (let i = 0; i < rowSplit.length; i++) {
      const stringRow = rowSplit[i];
      const splitRow: string[] = stringRow.split(' ');
      let matrixRow: number[] = [];

      for (let j = 0; j < splitRow.length; j++) {
        matrixRow.push(Number(splitRow[j]))
      }

      rows.push(matrixRow)
    }

    return rows;
  }

  get columns(): number[][] {
    const rows = this.rows;

    const columns: number[][] = [];

    for (let i=0; i<rows.length; i++) {
      const column: number[] = []
      for (let j=0; j<rows.length; j++) {
        column.push(rows[j][i])
      }
      columns.push(column)
    }

    console.log(this._all, "\n", columns, "\n", rows)

    return columns;
  }
}
