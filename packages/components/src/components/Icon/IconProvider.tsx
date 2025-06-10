import React, { createContext, useContext, useMemo } from 'react';
import type { IconSize, IconColor } from './Icon';

export interface IconConfig {
  /**
   * Default size for all icons
   */
  size?: IconSize | number | string;
  
  /**
   * Default color for all icons
   */
  color?: IconColor;
  
  /**
   * Default stroke width
   */
  stroke?: number;
  
  /**
   * Class name to apply to all icons
   */
  className?: string;
}

export interface IconProviderProps extends IconConfig {
  children: React.ReactNode;
}

const IconContext = createContext<IconConfig>({});

export function IconProvider({ 
  children, 
  size,
  color,
  stroke,
  className,
}: IconProviderProps) {
  const value = useMemo(
    () => ({
      size,
      color,
      stroke,
      className,
    }),
    [size, color, stroke, className]
  );

  return (
    <IconContext.Provider value={value}>
      {children}
    </IconContext.Provider>
  );
}

export function useIconConfig() {
  return useContext(IconContext);
}