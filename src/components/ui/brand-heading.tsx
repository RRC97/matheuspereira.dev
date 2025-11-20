import { Heading, type HeadingProps } from "@chakra-ui/react"

interface BrandHeadingProps extends HeadingProps {
}
export const BrandHeading = ({ children, style, ...props }: BrandHeadingProps) => {
  return (
    <Heading
      style={{
        background: "linear-gradient(135deg, #58a6ff, #7c3aed)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...style
      }}
      {...props}>
      {children}
    </Heading>
  )
}
