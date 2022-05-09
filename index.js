// Spdx-License-Identifier: MIT
// Copyright 2022 - Laguna Labs
//
// This is a simple chainlab adapter that processes incoming json
// packages and outputs json.

/* eslint n/no-callback-literal: 0 */

const { ApiAdapter, echoFunc, stub1Func } =
      require('./api_adapter')

const app = new ApiAdapter({
  urlPost: {
  },
  urlGet: {
    'truflation/current': 'https://virtserver.swaggerhub.com/truflation/Truflation/1.0.0/current',
    'truflation/at-date': 'https://virtserver.swaggerhub.com/truflation/Truflation/1.0.0/at-date/',
    'truflation/range': 'https://virtserver.swaggerhub.com/truflation/Truflation/1.0.0/range/'
  },
  func: {
    echo: echoFunc,
    stub1: stub1Func
  }
})

app.listen(process.env.EA_PORT || 8082)
