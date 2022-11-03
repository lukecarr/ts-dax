# day

> `day(date: Date): number`

Returns the day of the month for a specified date.

## Syntax

```ts
import { day } from 'ts-dax'

const dayOfMonth = day(new Date('2022-01-24'))
// => 24
```

## Parameters

| Param  | Type           | Description      |
| ------ | -------------- | ---------------- |
| `date` | [`Date`][date] | The date object. |

## Return value

An integer [`number`][number] indicating the day of the month for the provided date.

::: info
The return value is **not** zero-indexed (i.e. `1 <= x <= 31`, rather than `0 <= x <= 30`).
:::

## Examples

### Getting the day from a date object

The following expression extracts the day of the month from a date object.

```ts
import { day } from 'ts-dax'

const date: Date = ...
const dayOfMonth = day(date)
```

[date]: /guide/date-objects
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
