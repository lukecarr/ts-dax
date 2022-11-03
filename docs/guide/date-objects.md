# Date objects

In any instance where a ts-dax function requires a date as a parameter, you can choose to supply:

- a [`Date`][date] object,
- a `string`,
- or a `number`.

If you supply a `string` or a `number`, it will be passed to a [`new Date()`][date.constructor]. This means that you can supply a date/timestamp string, or an integer representing the number of milliseconds since January 1, 1970.

::: info
See the [JavaScript documentation][date.params] on `Date()` constructor parameters for more details!
:::

[date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[date.constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
[date.params]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
