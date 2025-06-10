declare module 'culori' {
  export function oklch(color: string): any;
  export function rgb(color: any): any;
  export function formatHex(color: any): string | undefined;
  export function formatRgb(color: any): string | undefined;
}