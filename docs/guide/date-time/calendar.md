# calendar

> `calendar(start: Date, end: Date): Set<Date>`

Returns a set of contiguous dates between the specified start date and specified end date, inclusive of those two dates.

## Syntax

```ts
import { calendar } from 'ts-dax'

const dates = calendar(new Date('2022-01-01'), new Date())
// => Set of dates from start of 2022 to today
```

## Parameters

| Param   | Type           | Description            |
| ------- | -------------- | ---------------------- |
| `start` | [`Date`][date] | The start date object. |
| `end`   | [`Date`][date] | The end date object.   |

## Return value

A [`Set<Date>`][set] of contiguous dates between `start` and `end`.

::: info
The range of dates in the return value are **inclusive** of `start` and `end`.
:::

## Exceptions

### `Error('start date cannot be greater than end date')`

Thrown if the provided start date is greater than the provided end date.

## Examples

The following expression generates a `Set<Date>` containing dates from January 1st, 2015 to December 31st, 2021 (inclusive of both dates).

```ts
import { calendar } from 'ts-dax'

const dates = calendar(new Date('2015-01-01'), new Date('2021-12-31'))
```

[date]: /guide/date-objects
[set]: /guide/working-with-sets
