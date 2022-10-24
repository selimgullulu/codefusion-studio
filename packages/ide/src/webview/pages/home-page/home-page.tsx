/**
 *
 * Copyright (c) 2023-2024 Analog Devices, Inc.
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

import React from "react";

import { CarouselPanel } from "./carousel-panel/CarouselPanel";
import { DocumentationPanel } from "./documentation-panel/DocumentationPanel";
import { TitlePanel } from "./title-panel/TitlePanel";
import { TopPanel } from "./top-panel/TopPanel";

import "./home-page.scss";

export const HomePage = () => {
  return (
    <div className="home-page">
      <TitlePanel></TitlePanel>
      <TopPanel></TopPanel>
      <CarouselPanel></CarouselPanel>
      <DocumentationPanel></DocumentationPanel>
    </div>
  );
};
