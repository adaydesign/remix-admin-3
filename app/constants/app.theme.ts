import { createTheme } from "@mantine/core";

const primaryColor = "blue"
const primaryRGB = "25,113,194"
const rgba = (rgb: string, a: number) => `rgba(${rgb}, ${a})`

const theme = createTheme({
    fontFamily: 'Prompt, sans-serif',
    fontFamilyMonospace: 'Prompt, Courier, monospace',
    headings: { fontFamily: 'Prompt, sans-serif' },
    defaultRadius: 'md',
    autoContrast: true,
    primaryColor: primaryColor,
    primaryShade: { light: 8, dark: 9 },
    colors: {
        primaryAlpha: [
            rgba(primaryRGB, 0.1),
            rgba(primaryRGB, 0.2),
            rgba(primaryRGB, 0.3),
            rgba(primaryRGB, 0.4),
            rgba(primaryRGB, 0.5),
            rgba(primaryRGB, 0.6),
            rgba(primaryRGB, 0.7),
            rgba(primaryRGB, 0.8),
            rgba(primaryRGB, 0.9),
            rgba(primaryRGB, 1),
        ],
    },
 
});

export { theme }