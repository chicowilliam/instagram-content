export type NavItem = {
  id: string
  label: string
  path: string
  icon: string
}

export const CMS_NAV: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'grid' },
  { id: 'posts', label: 'Posts', path: '/posts', icon: 'layers' },
  { id: 'ideas', label: 'Ideias', path: '/ideas', icon: 'lightbulb' },
  { id: 'templates', label: 'Templates', path: '/templates', icon: 'layout' },
  { id: 'stories', label: 'Stories', path: '/stories', icon: 'smartphone' },
  { id: 'reels', label: 'Reels', path: '/reels', icon: 'film' },
  { id: 'exports', label: 'Exportações', path: '/exports', icon: 'download' },
  { id: 'published', label: 'Publicado', path: '/published', icon: 'check' },
  { id: 'calendar', label: 'Calendário', path: '/calendar', icon: 'calendar' },
  { id: 'settings', label: 'Configurações', path: '/settings', icon: 'settings' },
]
