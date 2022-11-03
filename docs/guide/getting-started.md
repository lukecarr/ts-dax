# Getting started

This section will get you up and running with [DAX][dax] functions in your TypeScript project in no time at all!

::: info HEADS UP
ts-dax is not affiliated with nor endorsed by Microsoft in any way. This library is open-source, shared
using a permissive license, and community maintained!
:::

## Installation

Add ts-dax to your TypeScript project as a dependency:

```sh
$ pnpm add -E ts-dax
```

::: tip
We're using PNPM here for demonstrative purposes (we also use it internally for ts-dax), but you can use
whatever tickles your fancy!
:::

You can now start importing DAX functions within your project!

```ts
import { datesYTD } from 'ts-dax'
// const { datesYTD } = require('ts-dax')

const ytd = datesYTD(new Date())
// => Set<Date> containing dates from start of month to today
```

::: tip
ts-dax is [side-effect free and tree-shakeable][bundlephobia], so all of the
implemented functions are exported from the same path.

No need to remember if `datesYTD()` is found in `'ts-dax'`, `'ts-dax/calendar'`, or `'ts-dax/dates'`!
:::

## What next?

Now that you have a TypeScript project with ts-dax installed, it's time to dive into the API reference
and discover what DAX functions are at your disposal!

Take a look at the sidebar on the left for the different function categories available with ts-dax!

[dax]: https://learn.microsoft.com/en-us/dax/
[bundlephobia]: https://bundlephobia.com/package/ts-dax
