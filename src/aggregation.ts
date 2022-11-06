/**
 * Calculates the average (arithmetic mean) of a set of expressions evaluated over an array of objects.
 * @param objects The objects over which the aggregation will be performed.
 * @param expression An expression with a scalar result, which will be evaluated for each object.
 * @returns A number.
 */
export function averagex<T>(objects: T[], expression: (row: T) => number): number {
  let total = 0, i = 0, count = objects.length
  while (i < count) {
    total += expression(objects[i])
    i++
  }
  return total / count
}
