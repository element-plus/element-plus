import { buildProps, definePropType } from '@element-plus/utils'

type Numberish = string | number

export const rawImageProps = buildProps({
  /**
   * @description This attribute defines an alternative text description of the image. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#alt) attribute.
   */
  alt: {
    type: String,
  },
  /**
   * @description This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#crossorigin) attribute.
   */
  crossorigin: {
    type: definePropType<'anonymous' | 'use-credentials' | ''>(String),
  },
  /**
   * @description Provides an image decoding hint to the browser. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#decoding) attribute.
   */
  decoding: {
    type: definePropType<'async' | 'sync' | 'auto'>(String),
  },
  /**
   * @description Provides a hint of the relative priority to use when fetching the image. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#fetchpriority) attribute.
   */
  fetchpriority: {
    type: String,
    values: ['high', 'low', 'auto'],
  },
  /**
   * @description The intrinsic height of the image in pixels. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#height) attribute.
   */
  height: {
    type: definePropType<Numberish>([Number, String]),
  },
  /**
   * @description This Boolean attribute indicates that the image is part of a server-side map. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#ismap) attribute.
   */
  ismap: {
    type: Boolean,
  },
  /**
   * @description Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#loading) attribute.
   */
  loading: {
    type: String,
    values: ['eager', 'lazy'],
  },
  /**
   * @description A string indicating which referrer to use when fetching the resource. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#referrerpolicy) attribute.
   */
  referrerpolicy: {
    type: String,
    values: [
      'no-referrer',
      'no-referrer-when-downgrade',
      'origin',
      'origin-when-cross-origin',
      'same-origin',
      'strict-origin',
      'strict-origin-when-cross-origin',
      'unsafe-url',
    ],
  },
  /**
   * @description A list of one or more strings separated by commas indicating a set of source sizes. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#sizes) attribute.
   */
  sizes: {
    type: String,
  },
  /**
   * @description The image URL. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#src) attribute.
   */
  src: {
    type: String,
  },
  /**
   * @description A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#srcset) attribute.
   */
  srcset: {
    type: String,
  },
  /**
   * @descriptionThe intrinsic width of the image in pixels. [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#width) attribute.
   */
  width: {
    type: definePropType<Numberish>([Number, String]),
  },
  /**
   * @description The partial URL (starting with '#') of an [image map](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map) associated with the element.
 [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#usemap) attribute.
   */
  usemap: {
    type: String,
  },
} as const)

export type RawImagePropsKeys = keyof typeof rawImageProps
