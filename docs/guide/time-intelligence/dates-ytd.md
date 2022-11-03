# datesYTD

> `datesYTD(date: Date): Set<Date>`

Returns a set of dates from the start of the specified date's year to the specified date, inclusive of those two dates.

## Syntax

```ts
import { datesYTD } from 'ts-dax'

const year = datesYTD(new Date('2022-04-24'))
// => Set of dates from 2022-01-01 to 2022-04-24
```

## Parameters

| Param  | Type           | Description      |
| ------ | -------------- | ---------------- |
| `date` | [`Date`][date] | The date object. |

## Return value

A [`Set<Date>`][set] of contiguous dates for the year to (provided) date.

## Examples

### Getting the current year-to-date

The following expression generates a `Set<Date>` containing dates from the first day of the current year to today (inclusive of both dates).

```ts
import { datesYTD } from 'ts-dax'

const thisYear = datesYTD(new Date())
```

[date]: /guide/date-objects
[set]: /guide/working-with-sets
