import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="notranslate" translate="no" lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme}>
          {/* <DatesProvider settings={{ timezone: "UTC" }}>
            <ModalsProvider>
              <Notifications position="top-center" />
              {children}
            </ModalsProvider>
          </DatesProvider> */}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
