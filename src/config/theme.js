/**
 * Theme configuration for quick design switching.
 * Set themeId to: 'default' | 'spoke' | 'sushi-gallery' | 'mir-sushi'
 */

const themes = {
  default: {
    colors: {
      brandPrimary: '#f5f5f5',
      brandAccent: '#2979A6',
      headerText: '#6d6d6d',
      textPrimary: '#2e2d31',
      textSecondary: '#6d6d6d',
      link: '#2979A6',
      bgPageMobile: '#e8e4e0',
      bgCard: '#f5f5f5',
      dropdownHover: '#e8f4fc',
      dropdownHoverText: '#6d6d6d',
      inputBorder: '#e0e0e0',
    },
    header: {
      style: 'white_minimal',
      brandColor: 'transparent',
      textColor: '#6d6d6d',
      logoUrl: '/images/logo.png',
      brandTitle: 'Центр оценки качества ресторанов Суши Мастер',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e8e4e0',
      bgImage: '/images/hero-bg-desktop.png',
      bgGradient: '',
      bgOverlay: 'none',
    },
    hero: {
      imageUrl: '/images/hero-cat.png',
      imageWaitingUrl: '',
      captionFont: 'Caveat',
      show: true,
    },
    typography: {
      fontFamilyBase: "'Evolventa', system-ui, -apple-system, sans-serif",
      fontFamilyCaption: "'Caveat', cursive",
    },
    components: {
      borderRadiusCard: '20px',
      borderRadiusInput: '8px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  spoke: {
    colors: {
      brandPrimary: '#4CAF50',
      brandAccent: '#FF9800',
      headerText: '#fff',
      textPrimary: '#2e2d31',
      textSecondary: '#6d6d6d',
      link: '#2979A6',
      bgPageMobile: '#fff',
      bgCard: '#fff',
      dropdownHover: '#FF9800',
      dropdownHoverText: '#fff',
      inputBorder: '#e0e0e0',
    },
    header: {
      style: 'colored_bar',
      brandColor: '#4CAF50',
      textColor: '#fff',
      logoUrl: '/images/logo.png',
      brandTitle: 'ЦЕНТР ОЦЕНКИ КАЧЕСТВА РЕСТОРАНОВ СПОКЕ',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e8e4e0',
      bgImage: '/images/hero-bg-desktop.png',
      bgGradient: '',
      bgOverlay: 'none',
    },
    hero: {
      imageUrl: '/images/hero-cat.png',
      imageWaitingUrl: '',
      captionFont: 'Caveat',
      show: true,
    },
    typography: {
      fontFamilyBase: "'Evolventa', system-ui, -apple-system, sans-serif",
      fontFamilyCaption: "'Caveat', cursive",
    },
    components: {
      borderRadiusCard: '20px',
      borderRadiusInput: '8px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  'sushi-gallery': {
    colors: {
      brandPrimary: 'transparent',
      brandAccent: '#E91E63',
      headerText: '#2e2d31',
      textPrimary: '#2e2d31',
      textSecondary: '#6d6d6d',
      link: '#E91E63',
      bgPageMobile: '#e0e0e0',
      bgCard: '#fff',
      dropdownHover: '#E91E63',
      dropdownHoverText: '#fff',
      inputBorder: '#e0e0e0',
    },
    header: {
      style: 'white_minimal',
      brandColor: 'transparent',
      textColor: '#2e2d31',
      logoUrl: '/images/logo.png',
      brandTitle: 'Центр оценки качества ресторанов Галерея Суши',
    },
    desktop: {
      bgType: 'gradient',
      bgColor: '#e0e0e0',
      bgImage: '',
      bgGradient: 'linear-gradient(90deg, #ffc8dd 0%, #b8e0d2 100%)',
      bgOverlay: 'none',
    },
    hero: {
      imageUrl: '/images/hero-cat.png',
      imageWaitingUrl: '',
      captionFont: 'Caveat',
      show: true,
    },
    typography: {
      fontFamilyBase: "'Evolventa', system-ui, -apple-system, sans-serif",
      fontFamilyCaption: "'Caveat', cursive",
    },
    components: {
      borderRadiusCard: '20px',
      borderRadiusInput: '8px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  'mir-sushi': {
    colors: {
      brandPrimary: '#2196F3',
      brandAccent: '#FF9800',
      headerText: '#fff',
      textPrimary: '#2e2d31',
      textSecondary: '#6d6d6d',
      link: '#2979A6',
      bgPageMobile: '#f5f5f5',
      bgCard: '#fff',
      dropdownHover: '#FF9800',
      dropdownHoverText: '#fff',
      inputBorder: '#e0e0e0',
    },
    header: {
      style: 'colored_bar',
      brandColor: '#2196F3',
      textColor: '#fff',
      logoUrl: '/images/logo.png',
      brandTitle: 'ЦЕНТР ОЦЕНКИ КАЧЕСТВА МИР СУШИ',
    },
    desktop: {
      bgType: 'solid',
      bgColor: '#ADD8E6',
      bgImage: '',
      bgGradient: '',
      bgOverlay: 'none',
    },
    hero: {
      imageUrl: '/images/hero-shark.png',
      imageWaitingUrl: '/images/hero-shark-waiting.png',
      captionFont: 'Caveat',
      show: true,
    },
    typography: {
      fontFamilyBase: "'Evolventa', system-ui, -apple-system, sans-serif",
      fontFamilyCaption: "'Caveat', cursive",
    },
    components: {
      borderRadiusCard: '20px',
      borderRadiusInput: '8px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
    },
  },
}

/**
 * Apply theme to document by setting CSS custom properties.
 * @param {string} themeId - One of: 'default' | 'spoke' | 'sushi-gallery' | 'mir-sushi'
 */
export function applyTheme(themeId = 'default') {
  const theme = themes[themeId] || themes.default
  const root = document.documentElement

  // Colors
  root.style.setProperty('--color-brand-primary', theme.colors.brandPrimary)
  root.style.setProperty('--color-brand-accent', theme.colors.brandAccent)
  root.style.setProperty('--color-header-text', theme.colors.headerText)
  root.style.setProperty('--color-text-primary', theme.colors.textPrimary)
  root.style.setProperty('--color-text-secondary', theme.colors.textSecondary)
  root.style.setProperty('--color-link', theme.colors.link)
  root.style.setProperty('--color-bg-page-mobile', theme.colors.bgPageMobile)
  root.style.setProperty('--color-bg-card', theme.colors.bgCard)
  root.style.setProperty('--color-dropdown-hover', theme.colors.dropdownHover)
  root.style.setProperty('--color-dropdown-hover-text', theme.colors.dropdownHoverText)
  root.style.setProperty('--color-input-border', theme.colors.inputBorder)

  // Typography
  root.style.setProperty('--font-family-base', theme.typography.fontFamilyBase)
  root.style.setProperty('--font-family-caption', theme.typography.fontFamilyCaption)

  // Components
  root.style.setProperty('--radius-card', theme.components.borderRadiusCard)
  root.style.setProperty('--radius-input', theme.components.borderRadiusInput)
  root.style.setProperty('--shadow-card', theme.components.shadowCard)
  root.style.setProperty('--shadow-card-desktop', theme.components.shadowCardDesktop)

  // Desktop background (computed for CSS)
  const desktop = theme.desktop
  let desktopBg = desktop.bgColor
  if (desktop.bgType === 'image' && desktop.bgImage) {
    desktopBg = `url(${desktop.bgImage}) no-repeat center center`
  } else if (desktop.bgType === 'gradient' && desktop.bgGradient) {
    desktopBg = desktop.bgGradient
  }
  root.style.setProperty('--desktop-bg', desktopBg)
  root.style.setProperty('--desktop-bg-overlay', desktop.bgOverlay)

  // Store full theme for components that need it (header, layout, hero)
  root.dataset.theme = JSON.stringify({
    header: theme.header,
    desktop: theme.desktop,
    hero: theme.hero,
  })
}

/**
 * Get current theme config from DOM (set by applyTheme).
 * @returns {{ header: object, desktop: object, hero: object }}
 */
export function getTheme() {
  try {
    const data = document.documentElement.dataset.theme
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

export { themes }
export default themes
