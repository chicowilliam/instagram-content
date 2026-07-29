import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { ExportModeProvider } from '@/lib/export-mode'
import { getPostById } from '@/posts/catalog'
import { CalendarView } from '@/calendar/CalendarView'
import {
  CmsShell,
  DashboardPage,
  PostsPage,
  PostDetailPage,
  IdeasPage,
  TemplatesPage,
  StoriesPage,
  ReelsPage,
  ExportsPage,
  PublishedPage,
  SettingsPage,
} from '@/dashboard'

function PreviewPage() {
  const { id } = useParams()
  const post = id ? getPostById(id) : undefined

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-50 text-sm text-ink-400">
        Post não encontrado.{' '}
        <Link to="/posts" className="ml-2 underline">
          Voltar
        </Link>
      </div>
    )
  }

  const { Component } = post

  return (
    <div className="min-h-screen bg-surface-100">
      <div className="mx-auto flex max-w-[540px] items-center justify-between px-4 pt-6 pb-2">
        <Link
          to={`/posts/${post.id}`}
          className="text-sm text-ink-400 transition hover:text-ink-700"
        >
          ← CMS
        </Link>
        <span className="font-mono text-xs text-ink-400">
          Preview · {post.id}
        </span>
      </div>
      <div className="flex justify-center px-4 pb-16 pt-4">
        <Component />
      </div>
    </div>
  )
}

function ExportPage() {
  const { id } = useParams()
  const post = id ? getPostById(id) : undefined

  if (!post) {
    return (
      <div data-export-error style={{ padding: 40, fontFamily: 'monospace' }}>
        Post not found: {id}
      </div>
    )
  }

  const { Component } = post

  return (
    <ExportModeProvider value={true}>
      <div
        data-export-root
        data-post-id={post.id}
        data-post-slug={post.slug}
        style={{
          margin: 0,
          padding: 0,
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 0,
        }}
      >
        <Component />
        <div data-export-deliverables hidden>
          {JSON.stringify(post.deliverables)}
        </div>
      </div>
    </ExportModeProvider>
  )
}

function CalendarPage() {
  return <CalendarView />
}

export default function App() {
  return (
    <Routes>
      <Route element={<CmsShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailPage />} />
        <Route path="ideas" element={<IdeasPage />} />
        <Route path="templates" element={<TemplatesPage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="reels" element={<ReelsPage />} />
        <Route path="exports" element={<ExportsPage />} />
        <Route path="published" element={<PublishedPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="/post/:id" element={<PreviewPage />} />
      <Route path="/export/:id" element={<ExportPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
