"use client";

import {
  // ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  CloseButton,
  ColorSwatch,
  Container,
  DEFAULT_THEME,
  Divider,
  InputLabel,
  Loader,
  LoadingOverlay,
  Menu,
  Modal,
  MultiSelect,
  PasswordInput,
  Popover,
  ScrollArea,
  Select,
  Table,
  Tabs,
  Tooltip,
  VariantColorResolverResult,
  VariantColorsResolverInput,
  createTheme,
  defaultVariantColorsResolver,
  parseThemeColor,
  rem,
} from "@mantine/core";
import { DatePickerInput, DateTimePicker } from "@mantine/dates";
import { Manrope } from "next/font/google";
import { MantineColor } from "@mantine/core";

export const StatusColor = {
  default: "#D8D8D8",
  info: "#1677FF",
  success: "#52C41A",
  error: "#FF4D4F",
  warn: "##FAAD14",
};

export function MantineColorStyle(key: MantineColor, filled: boolean = true) {
  if (!filled) {
    return `var(--mantine-color-${key})`;
  }
  return `var(--mantine-color-${key}-filled)`;
}

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export const theme = createTheme({
  fontFamily: `${manrope.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    xxl: "96em",
  },
});
