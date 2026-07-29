import { createContext, useContext } from 'react'

export type ContentFormatKind = 'carousel' | 'stories'

export const ContentFormatContext =
  createContext<ContentFormatKind>('carousel')

export function useContentFormat() {
  return useContext(ContentFormatContext)
}
