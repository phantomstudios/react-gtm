# react-gtm

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

React Google Tag Manager

## Introduction

A simple React package to implement custom Google Tag Manager tags. Designed to use and extend [GTM](https://developers.google.com/tag-manager/quickstart) snippets.

```javascript
import track from "@phntms/react-gtm";

track({
  event: "customEvent",
  name: "CTA - To External",
  category: "CTA",
  action: "To: https://phantom.land/",
  label, "CTA Click",
});

```

## Installation

Install this package with `npm`.

```bash
npm i @phntms/react-gtm
```

## Usage

To initialize GTM, add the `TrackingHeadScript` to the `head` of the page and `TrackingBodyScript` to the `body`.

Example initialization in Next.js:

```JSX
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { TrackingHeadScript, TrackingBodyScript } from "@phntms/react-gtm";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <TrackingHeadScript id={GA_TRACKING_ID} />
        </Head>
        <body>
          <TrackingBodyScript id={GA_TRACKING_ID} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## API

### Input

|Value|Type|Required|Notes|
|------|-----|-----|-----|
|id| `String`| Yes | GTM id, will be in the format; `GTM-000000`.|
|dataLayer| `Object`| No | window.dataLayer object that contains all information of events passed into Google Tag Manager.|

[npm-image]: https://img.shields.io/npm/v/@phntms/react-gtm.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/@phntms/react-gtm
[npm-downloads-image]: https://img.shields.io/npm/dm/@phntms/react-gtm.svg
[npm-downloads-url]: https://npmcharts.com/compare/@phntms/react-gtm?minimal=true
[ci-image]: https://github.com/phantomstudios/react-gtm/workflows/test/badge.svg
[ci-url]: https://github.com/phantomstudios/react-gtm/actions
