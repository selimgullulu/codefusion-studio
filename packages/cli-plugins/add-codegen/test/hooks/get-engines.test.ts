/**
 *
 * Copyright (c) 2024 Analog Devices, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import {expect, test} from '@oclif/test';

describe('hooks', () => {
  const config = {root: process.cwd()}; 
  const engine = 'example-code-generation-engine';

  test
    .loadConfig(config)
    .stdout()
    .hook('get-engines', {argv: []}, config)
    .do((output) => {
      // @ts-expect-error: hook output.returned is of type unknown
      const {result} = output.returned.successes[0];
      expect(result).to.have.length(1);
      expect(result[0]).to.have.property('name', engine);
    })
    .it('should respond to get-engines hook');
});
