import 'styled-components';
import { Devices } from '_config/device/types';
import { BaseColors } from '_config/theme/colors'

declare module 'styled-components' {
    export interface DefaultTheme extends BaseColors {
        device: Devices
    }
}