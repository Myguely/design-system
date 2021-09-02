/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface Lengthable<T> {
  /**
   * Get number of elements.
   */
  length(locator: string): T
}

export const LengthableMixin: Mixin = ({ element }) => ({
  length: (locator: string) => {
    return element().then($body => $body.find(locator).length)
  },
})
