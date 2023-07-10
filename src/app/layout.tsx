import { Metadata } from "next";

import "./globals.css";
import { Maven_Pro } from "next/font/google";

import {
  injectCSSVariables,
  prepareColorVariablesForCSSInject,
} from "@/utils/cssVariables/cssVariables";
import { themeColors } from "@/theme/theme";

const maven = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={maven.className}
        style={injectCSSVariables({
          ...prepareColorVariablesForCSSInject(themeColors),
          "small-container-size": "600px",
          "medium-container-size": "900px",
          "large-container-size": "1200px",
        })}
      >
        {children}
      </body>
    </html>
  );
}
