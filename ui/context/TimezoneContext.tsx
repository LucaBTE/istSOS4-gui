/*
 * Copyright 2025 SUPSI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { setGlobalTimeShift } from "../components/hooks/formatDateWithTimezone";

const TimezoneContext = createContext({
  timezone: "UTC",
  setTimezone: (_tz: string) => {},
  timeShiftHours: 0,
  setTimeShiftHours: (_h: number) => {}
});

export const TimezoneProvider = ({ children }) => {
  const [timezone, setTimezone] = useState("UTC");
  const [timeShiftHours, setTimeShiftHours] = useState<number>(0);

  return (
    <TimezoneContext.Provider value={{ timezone, setTimezone, timeShiftHours, setTimeShiftHours }}>
      {children}
    </TimezoneContext.Provider>
  );
};

export const useTimezone = () => useContext(TimezoneContext);