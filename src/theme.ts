import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
        heading: { value: "Inter, system-ui, sans-serif" },
        mono: { value: "Inter, system-ui, sans-serif" },
      },
      colors: {
        primary: {
          50: { value: "#EAF5FF" },
          100: { value: "#D4EAFF" },
          200: { value: "#A8D5FF" },
          300: { value: "#7CC0FF" },
          400: { value: "#58A6FF" }, // base
          500: { value: "#3E8EE6" },
          600: { value: "#2F6EB4" },
          700: { value: "#24558C" },
          800: { value: "#1A3C66" },
          900: { value: "#112640" },
          950: { value: "#0A1626" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.100}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
      },
    },
  }
})
export const system = createSystem(defaultConfig, customConfig)
