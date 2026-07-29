import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function CmsShell() {
  return (
    <div className="flex min-h-screen bg-surface-50 text-ink-900">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
