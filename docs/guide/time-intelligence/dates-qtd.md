# datesQTD

> `datesQTD(date: Date): Set<Date>`

Returns a set of dates from the start of the specified date's quarter to the specified date, inclusive of those two dates.

## Syntax

```ts
import { datesQTD } from 'ts-dax'

const quarter = datesQTD(new Date('2022-03-24'))
// => Set of dates from 2022-01-01 to 2022-03-24
```

## Parameters

| Param  | Type           | Description      |
| ------ | -------------- | ---------------- |
| `date` | [`Date`][date] | The date object. |

## Return value

A [`Set<Date>`][set] of contiguous dates for the quarter to (provided) date.

## Examples

### Getting the current quarter-to-date

The following expression generates a `Set<Date>` containing dates from the first day of the current quarter to today (inclusive of both dates).

```ts
import { datesQTD } from 'ts-dax'

const thisQuarter = datesQTD(new Date())
```

[date]: /guide/date-objects
[set]: /guide/working-with-sets
