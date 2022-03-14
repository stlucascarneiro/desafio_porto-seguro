import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
// Config
import { ThemeProvider } from "styled-components";
import { DeviceController } from "_config/device/resize";
import { GlobalStyle } from "_config/theme/global";
import { BaseColors } from "_config/theme/colors";
import { DeviceContext } from "_config/context/device";

// Types
import { Devices } from "_config/device/types";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [device, setDevice] = useState<Devices>(Devices.undefined);

    useEffect(() => {
        if (device === Devices.undefined) {
            DeviceController.loadDevice(device, setDevice)
        } else {
            function callback() {
                return DeviceController.handleResize(device, setDevice, callback)
            }
            window.addEventListener('resize', callback)
        }
    }, [device]);

    const theme = new BaseColors

    return (
        <>
            <DeviceContext.Provider value={device}>
                <GlobalStyle />
                <ThemeProvider theme={{ ...theme, device }}>

                    <Component {...pageProps} />
                </ThemeProvider>
            </DeviceContext.Provider>
        </>
    );
}