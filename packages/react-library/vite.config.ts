/**
 *
 * Copyright (c) 2024 Analog Devices, Inc. All Rights Reserved.
 * This software is proprietary to Analog Devices, Inc. and its licensors.
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

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		libInjectCss(),
		dts({
			insertTypesEntry: true,
			include: "src",
			exclude: ["src/**/*.stories.tsx"],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			name: "Common React Library",
			fileName: "cfs-react-library",
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ["react", "react-dom"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
