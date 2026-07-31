import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { useSmoothScroll } from '@/hooks'
import { Sidebar } from './Sidebar'

export function CmsShell() {
  const scroller = useRef<HTMLElement>(null)
  useSmoothScroll(scroller)

  return (
    <div className="flex min-h-screen bg-surface-50 text-ink-900">
      <Sidebar />
      <main ref={scroller} className="h-screen min-w-0 flex-1 overflow-y-auto">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
