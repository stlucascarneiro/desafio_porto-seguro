import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
// import { DeviceContext } from "_config/context/device";
// Config
import { DeviceController } from "_config/device/resize";
import { GlobalStyle } from "_config/theme/global";
import { BaseColors } from "_config/theme/colors";
// Components

// Assets

// Types
import { Devices } from "_config/device/types";
import { ThemeProvider } from "styled-components";
import { DeviceContext } from "_config/context/device";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [device, setDevice] = useState<Devices>(Devices.undefined);

    useEffect(() => {
        // console.log(device)
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
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet" />
            </Head>
            <DeviceContext.Provider value={device}>
                <GlobalStyle />
                <ThemeProvider theme={{ ...theme, device }}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </DeviceContext.Provider>
        </>
    );
}