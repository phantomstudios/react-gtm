# @phntms/react-gtm

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

A lightweight React library to implement custom Google Tag Manager events.

## Introduction

Designed to use and extend [GTM](https://developers.google.com/tag-manager/quickstart) snippets. This library is also SSR safe and does not break when used without window existing.

## Installation

Install this package with `npm`.

```bash
npm i @phntms/react-gtm
```

## Usage

### &lt;TrackingHeadScript /> and &lt;TrackingBodyScript />

| Property | Type     | Default | Required | Notes                                                                           |
| -------- | -------- | ------- | -------- | ------------------------------------------------------------------------------- |
| **id**   | `string` |         | **Yes**  | ID that uniquely identifies GTM Container. Will be in the format; `GTM-xxxxxx`. |

To initialize GTM, add `TrackingHeadScript` to the `head` of the page and `TrackingBodyScript` to the `body`.

Example initialization in Next.js:

```JSX
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { trackingHeadScript, trackingBodyScript } from "@phntms/react-gtm";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <trackingHeadScript id={GA_TRACKING_ID} />
        </Head>
        <body>
          <trackingBodyScript id={GA_TRACKING_ID} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

**Note**: If used alongside any cookie consent scripts, `<TrackingHeadScript />` must be placed after.

### trackEvent()

| Parameter | Type                 | Default       | Required | Notes                                                                                                                             |
| --------- | -------------------- | ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| event     | `string`             | "interaction" | No       | Custom GTM event name, such as "customEvent".                                                                                     |
| data      | `[key: string]: any` | undefined     | No       | Optional data values to add to GTM event. Example of recommended properties to include; `name`, `category`, `action` and `label`. |

Used to push new tracking events to GTM container.

Example of a basic tracking event:

```javascript
import { trackEvent } from "@phntms/react-gtm";

trackEvent("customEvent", {
  name: "CTA - To External",
  category: "CTA",
  action: "To: https://phantom.land/",
  label: "Click",
});
```

### window.dataLayer

This library extends `window` and exposes the `window.dataLayer` GTM container object.

## Further Resources

Useful resource for implementing custom GTM events;

- [Omnibug](https://chrome.google.com/webstore/detail/omnibug/bknpehncffejahipecakbfkomebjmokl?hl=en) - Chrome browser extension to decode and display outgoing GTM events from within Inspect Element.

[npm-image]: https://img.shields.io/npm/v/@phntms/react-gtm.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/@phntms/react-gtm
[npm-downloads-image]: https://img.shields.io/npm/dm/@phntms/react-gtm.svg
[npm-downloads-url]: https://npmcharts.com/compare/@phntms/react-gtm?minimal=true
[ci-image]: https://github.com/phantomstudios/gtm/workflows/Test/badge.svg
[ci-url]: https://github.com/phantomstudios/gtm/actions
