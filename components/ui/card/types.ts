import { HTMLAttributes, ReactNode } from "react";

export interface CardBaseProps {
  variant?: "default" | "image" | "portfolio" | "elevated" | "outline";
  size?: "sm" | "md" | "lg" | "full";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  hoverEffect?: "none" | "scale" | "shadow" | "grow" | "float";
  className?: string;
  children?: ReactNode;
}

export interface CardProps extends CardBaseProps, HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  objectFit?: "cover" | "contain" | "fill";
  overlay?: boolean;
  overlayOpacity?: "light" | "medium" | "dark";
}

export interface CardOverlayProps extends HTMLAttributes<HTMLDivElement> {
  position?: "top" | "center" | "bottom";
  gradient?: "none" | "top" | "bottom" | "radial";
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  titleSize?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  compact?: boolean;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  justify?: "start" | "center" | "end" | "between";
  border?: boolean;
}

export interface CardActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export interface CardContextType {
  variant: CardBaseProps["variant"];
  size: CardBaseProps["size"];
}