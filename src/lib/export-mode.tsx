import { createContext, useContext, type ReactNode } from 'react'

const ExportModeContext = createContext(false)

export function ExportModeProvider({
  value,
  children,
}: {
  value: boolean
  children: ReactNode
}) {
  return (
    <ExportModeContext.Provider value={value}>
      {children}
    </ExportModeContext.Provider>
  )
}

export function useExportMode() {
  return useContext(ExportModeContext)
}
