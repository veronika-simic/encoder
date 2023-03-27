import { createContext } from 'react';

interface ColorContextSchema {
  toggleColorMode: () => void;
}

// eslint-disable-next-line import/prefer-default-export
export const ColorContext = createContext<ColorContextSchema>(
  {} as ColorContextSchema
);
