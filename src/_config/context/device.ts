import { createContext } from "react";
import { Devices } from "_config/device/types";

export const DeviceContext = createContext<Devices>(Devices.undefined)