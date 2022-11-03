# dateDiff

> `dateDiff(x: Date, y: Date, interval: Interval): number`

Returns the number of interval boundaries between two dates.

## Syntax

```ts
import { dateDiff, Interval } from 'ts-dax'

const diff = dateDiff(new Date('2022-01-01'), new Date(), Interval.MINUTE)
// => Number of minutes since the start of 2022
```

## Parameters

| Param      | Type                   | Description                               |
| ---------- | ---------------------- | ----------------------------------------- |
| `x`        | [`Date`][date]         | The first date object.                    |
| `y`        | [`Date`][date]         | The second date object.                   |
| `interval` | [`Interval`][interval] | The interval to use when comparing dates. |

## Return value

The [`number`][number] of interval boundaries between two dates.

::: info

- A positive result is returned if `y` is greater than `x`.
- A negative result is returned if `x` is greater than `y`.
- Zero is returned if `x` and `y` are equal.
  :::

## Examples

The following expression generates a `Set<Date>` containing dates from January 1st, 2015 to December 31st, 2021 (inclusive of both dates).

```ts
import { calendar } from 'ts-dax'

const dates = calendar(new Date('2015-01-01'), new Date('2021-12-31'))
```

[date]: /guide/date-objects
[interval]: /guide/misc/interval
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
