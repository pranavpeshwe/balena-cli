/**
 * @license
 * Copyright 2019 Balena Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

declare module 'resin-cli-form' {
	import Bluebird = require('bluebird');

	type TypeOrPromiseLike<T> = T | PromiseLike<T>;

	type Validate = (
		input: any,
	) => TypeOrPromiseLike<boolean | string | undefined>;

	interface AskOptions {
		message: string;
		type?: string;
		name?: string;
		default?: T;
		choices?: Array<{
			name: string;
			value: T;
		}>;
		validate?: Validate;
	}

	interface RunQuestion {
		message: string;
		name: string;
		type?: string;
		validate?: Validate;
	}

	const form: {
		ask: <T = string>(options: AskOptions) => Bluebird<T>;
		run: <T = any>(
			questions: RunQuestion[],
			extraOptions?: { override: object },
		) => Bluebird<T>;
	};

	export = form;
}
