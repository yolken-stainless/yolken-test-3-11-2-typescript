// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { YolkenTest3_11_2 } from '../client';

export abstract class APIResource {
  protected _client: YolkenTest3_11_2;

  constructor(client: YolkenTest3_11_2) {
    this._client = client;
  }
}
