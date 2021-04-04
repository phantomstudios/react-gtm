# @phntms/gtm

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

React Google Tag Manager

## Introduction

A simple React library to implement custom Google Tag Manager events. Designed to use and extend [GTM](https://developers.google.com/tag-manager/quickstart) snippets.

```javascript
import { trackEvent } from "@phntms/react-gtm";

trackEvent('customEvent', {
  name: "CTA - To External",
  category: "CTA",
  action: "To: https://phantom.land/",
  label: "Click",
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

## Components

### <TrackingHeadScript /> and <TrackingBodyScript />

| Property | Type | Default | Required | Notes |
| -------- | ---- | ------- | -------- | ------- |
| **id** | `string` | | **Yes** | The Container ID that uniquely identifies the GTM Container. Will be in the format; `GTM-000000`. |

**Note**: If used alongside any cookie consent scripts, `<TrackingHeadScript />` must be placed after.

### trackEvent()

| Parameter | Type | Default | Required | Notes |
| -------- | ---- | ------- | -------- | ------- |
| event | `string` | "interaction" | No | Custom GTM event name, such as "customEvent". |
| ...args | `[key: string]: string | number` | undefined | No | Optional values to append to GTM event. Example of recommended properties to include; `name`, `category`, `action` and `label`. |

Primarily function used to push new tracking events to GTM container.

### useTracking()

| Parameter | Type | Default | Required | Notes |
| -------- | ---- | ------- | -------- | ------- |
| event | `string` | undefined | No | Custom GTM event name, such as "customEvent". |
| ...args | `[key: string]: string | number` | undefined | No | Optional values to append to GTM event. Example of recommended properties to include; `name`, `category`, `action` and `label`. |

Extends `trackEvent()` and returns in a callable React `useCallback` hook.

### window.dataLayer

This library extends `window` and exposes the `window.dataLayer` object, which contains all GTM events passed into Google Tag Manager.

## Further Resources

When implementing GTM events, the following resources are recommended to aid implementation:

- [Omnibug](https://chrome.google.com/webstore/detail/omnibug/bknpehncffejahipecakbfkomebjmokl?hl=en) - Chrome browser extension to decode and display outgoing GTM events from within Inspect Element.

[npm-image]: https://img.shields.io/npm/v/@phntms/gtm.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/@phntms/gtm
[npm-downloads-image]: https://img.shields.io/npm/dm/@phntms/gtm.svg
[npm-downloads-url]: https://npmcharts.com/compare/@phntms/gtm?minimal=true
[ci-image]: https://github.com/phantomstudios/gtm/workflows/test/badge.svg
[ci-url]: https://github.com/phantomstudios/gtm/actions
