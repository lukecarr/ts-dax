# datesMTD

> `datesMTD(date: Date): Set<Date>`

Returns a set of dates from the start of the specified date's month to the specified date, inclusive of those two dates.

## Syntax

```ts
import { datesMTD } from 'ts-dax'

const month = datesMTD(new Date('2022-01-24'))
// => Set of dates from 2022-01-01 to 2022-01-24
```

## Parameters

| Param  | Type           | Description      |
| ------ | -------------- | ---------------- |
| `date` | [`Date`][date] | The date object. |

## Return value

A [`Set<Date>`][set] of contiguous dates for the month to (provided) date.

## Examples

### Getting the current month-to-date

The following expression generates a `Set<Date>` containing dates from the first day of the current month to today (inclusive of both dates).

```ts
import { datesMTD } from 'ts-dax'

const thisMonth = datesMTD(new Date())
```

[date]: /guide/date-objects
[set]: /guide/working-with-sets
