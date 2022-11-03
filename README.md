# ts-dax

> 📈 Data Analysis Expression (DAX) functions implemented in TypeScript

[![npm](https://img.shields.io/npm/v/ts-dax?color=blue)](https://npmjs.com/package/ts-dax)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-dax?color=success)](https://bundlephobia.com/package/ts-dax)
[![npm install size](https://packagephobia.com/badge?p=ts-dax)](https://packagephobia.com/result?p=ts-dax)
[![maintainability](https://img.shields.io/codeclimate/maintainability/lukecarr/ts-dax)](https://codeclimate.com/github/lukecarr/ts-dax)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/ts-dax)
[![dependencies](https://img.shields.io/badge/dependencies-0-success)](https://www.npmjs.com/package/ts-dax?activeTab=dependencies)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/lukecarr/ts-dax/Test/main?label=tests)](https://github.com/lukecarr/ts-dax/actions/workflows/test.yml)

## 🚀 Quick Start

### Install

```bash
# Use your favorite package manager!
pnpm add -E ts-dax
```

### Import

```ts
// ESM / TypeScript
import { datesMTD } from 'ts-dax'
// or CommonJS
// const {} = require('ts-dax')

const dates = datesMTD(new Date())
// => Set<Date> containing dates from start of month to today
```

## 📃 License

ts-dax is licensed under the [`MIT License`](LICENSE).
