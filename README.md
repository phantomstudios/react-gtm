# @phntms/react-gtm

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

A lightweight React library to implement custom Google Tag Manager events.

## Introduction

Designed to use and extend [GTM](https://developers.google.com/tag-manager/quickstart) snippets. This library is also SSR safe and does not break when used without window existing. This package is intended to be used with React / older Next.JS apps, for Next.JS 11 and above we recommend using [@phntms/next-gtm](https://www.npmjs.com/package/@phntms/next-gtm).

## Installation

Install this package with `npm`.

```bash
npm i @phntms/react-gtm
```

## Usage

### &lt;TrackingHeadScript /> and &lt;TrackingBodyScript />

| Property | Type     | Default   | Required | Notes                                                                           |
| -------- | -------- | --------- | -------- | ------------------------------------------------------------------------------- |
| **id**   | `string` | undefined | **Yes**  | ID that uniquely identifies GTM Container. Will be in the format; `GTM-xxxxxx`. |

To initialize GTM, add `TrackingHeadScript` to the `head` of the page and `TrackingBodyScript` to the `body`.

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
  render = () => (
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
```

**Note**: If used alongside any cookie consent scripts, `<TrackingHeadScript />` must be placed after.

### trackEvent()

| Parameter | Type                 | Default   | Required | Notes                                           |
| --------- | -------------------- | --------- | -------- | ----------------------------------------------- |
| props     | `EventTrackingProps` | undefined | No       | Custom tracking event to push to GTM container. |

Example of a basic tracking event:

```javascript
import { trackEvent } from "@phntms/react-gtm";

trackEvent({
  event: "customEvent",
  data: {
    action: "Click - To: https://phantom.land/",
    category: "CTA",
    label: "Click",
  },
});
```

### EventDataProps

| Parameter | Type             | Default       | Required | Notes                                                                                                                                     |
| --------- | ---------------- | ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| event     | `string`         | "customEvent" | No       | Custom GTM event name, defaults to `customEvent`.                                                                                         |
| data      | `EventDataProps` | undefined     | No       | Supports any value(s) in the format `[key: string]: any`. Example of recommended properties to include; `action`, `category` and `label`. |

### window.dataLayer

This library extends `window` and exposes the `window.dataLayer` GTM container object.

## Further Resources

Useful resource for implementing custom GTM events:

- [Omnibug](https://chrome.google.com/webstore/detail/omnibug/bknpehncffejahipecakbfkomebjmokl?hl=en) - Chrome browser extension to decode and display outgoing GTM events from within Inspect Element.

## 🍰 Contributing

Want to get involved, or found an issue? Please contribute using the GitHub Flow. Create a branch, add commits, and open a Pull Request or submit a new issue.

Please read `CONTRIBUTING` for details on our `CODE_OF_CONDUCT`, and the process for submitting pull requests to us!

[npm-image]: https://img.shields.io/npm/v/@phntms/react-gtm.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/@phntms/react-gtm
[npm-downloads-image]: https://img.shields.io/npm/dm/@phntms/react-gtm.svg
[npm-downloads-url]: https://npmcharts.com/compare/@phntms/react-gtm?minimal=true
[ci-image]: https://github.com/phantomstudios/gtm/workflows/Test/badge.svg
[ci-url]: https://github.com/phantomstudios/gtm/actions
