// Shared types for Figma plugins

export interface ColorToken {
  value: string;
  description?: string;
}

export interface ColorScale {
  [key: string]: string;
}

export interface SemanticColorToken {
  light: string;
  dark: string;
}

export interface SpacingToken {
  value: string;
  description?: string;
}

export interface TypographyToken {
  fontSize?: { [key: string]: string };
  fontWeight?: { [key: string]: string | number };
  lineHeight?: { [key: string]: string | number };
  letterSpacing?: { [key: string]: string };
}

export interface AnimationToken {
  duration?: { [key: string]: { value: string; description?: string } };
  easing?: { [key: string]: { value: string; description?: string } };
  transition?: { [key: string]: { value: string; description?: string } };
}

export interface ComponentVariant {
  name: string;
  values: string[];
}

export interface ComponentDefinition {
  variants: { [key: string]: string[] };
  booleans: string[];
  slots?: string[];
  states?: string[];
}

export interface VariableInfo {
  id: string;
  name: string;
  collection: string;
  resolvedType: VariableResolvedDataType;
}