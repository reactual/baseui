/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulDatepicker} from '../index.js';

export const name = 'Stateful range datepicker';

export const component = () => (
  <StatefulDatepicker range initialState={{value: []}} />
);
