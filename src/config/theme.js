/**
 * Theme configuration for quick design switching.
 * Set themeId to: 'default' | 'spoke' | 'sushi-gallery' | 'mir-sushi' | 'sushi_world'
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
      dropdownHover: '#BFCFFF33',//e8f4fc
      dropdownHoverText: '#6d6d6d',
      inputBorder: '#e0e0e0',
      headerBg: '#ffffff',
      
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
      text: 'Здравствуйте!\nВы на странице оценки качества ресторанов Суши Мастер' ,
      textFinish: 'Оставьте отзыв\nо нашей работе ' 
    },
    hero: {
      imageUrl: '/images/theme-default/cat1.png',
      imageUrlScreen2: '/images/theme-default/cat2.png',
      imageUrlScreen3: '/images/theme-default/cat3.png',
      imageWidth: '383px',
      imageLeft: '50%',
      imagetranslateX : 'translateX(-50%)',
      imageRight: 'unset',
      imageWaitingUrl: '',
      captionFont: 'Caveat',
      captionText: '',
      show: true,
    },
    typography: {
      fontFamilyBase: "Evolventa",
      fontFamilyCaption: "Evolventa",
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
      textPrimary: '#7E7E7E',//2e2d31
      textSecondary: '#6d6d6d',
      link: '#2979A6',
      bgPageMobile: '#fff',
      bgCard: '#FFFCF4',
      dropdownHover: '#EA651D',
      dropdownChevron: '#EA651D',
      dropdownHoverText: '#fff',
      inputBorder: '#83BB43',
      headerBg: '#4CAF50',

    },
    header: {
      style: 'colored_bar',
      height: '44px',
      brandColor: '#4CAF50',
      textColor: '#fff',
      logoUrl: '/images/spoke_logo.png',
      brandTitle: 'Центр оценки качества ресторанов Споке',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e8e4e0',
      bgImage: '/images/theme-spoke/spoke-bg.png',
      bgGradient: '',
      bgOverlay: 'none',
      text: 'Здравствуйте!\nВы на странице оценки качества ресторанов Споке' ,
      textFinish: 'Оставьте отзыв\nо нашей работе ' 
    },
    hero: {
      imageWidth: '383px',
      imageLeft: 'unset',
      imagetranslateX : 'unset',
      imageRight: '0',

      imageWaitingUrl: '',
      captionFont: 'Caveat',
      captionText: '',

      show: true,
    },
    typography: {
      fontFamilyBase: "Gotham Pro",
      fontFamilyCaption: "Adigiana Extreme",
    },
    components: {
      cardBorder: '0.8px solid #83BB43',
      borderRadiusCard: '30px',
      borderRadiusInput: '28px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
      SelectItemBorderRadius: '20px',
      greetingTextSize: '28px',
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
      dropdownChevron: '#E91E63',
      dropdownHoverText: '#fff',
      inputBorder: '#e0e0e0',
      headerBg: '#ffffff',
    },
    header: {
      style: 'white_minimal',
      brandColor: 'transparent',
      textColor: '#2e2d31',
      logoUrl: '/images/sushi-gallery_logo.png',
      brandTitle: 'Центр оценки качества ресторанов Галерея Суши',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e0e0e0',
      bgImage: '/images/theme-sushi-gallery/sushi-gallery-bg.webp',
      bgGradient: 'linear-gradient(90deg, #ffc8dd 0%, #b8e0d2 100%)',
      bgOverlay: 'none',
      text: 'Здравствуйте!\nВы на странице оценки качества ресторанов Галерея Суши' ,
      textFinish: 'Оставьте отзыв\nо нашей работе' 
    },
    hero: {
      imageWidth: '383px',
      imageLeft: '50%',
      imagetranslateX : 'translateX(-50%)',
      imageRight: 'unset',
      imageWaitingUrl: '',
      captionFont: 'Caveat',
      captionText: '',

      show: true,
    },
    typography: {
      fontFamilyBase: "Evolventa",
      fontFamilyCaption: "Evolventa",
    },
    components: {
      borderRadiusCard: '30px',
      borderRadiusInput: '28px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
      SelectItemBorderRadius: '20px',

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
      dropdownChevron: '#FF9800',
      dropdownHoverText: '#fff',
      inputBorder: '#e0e0e0',
      headerBg: '#2979A6',
    },
    header: {
      style: 'colored_bar',
      brandColor: '#2196F3',
      textColor: '#fff',
      logoUrl: '/images/sushi-world-logo.png',
      brandTitle: 'Центр оценки качества Мир суши',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#ADD8E6',
      bgImage: '/images/theme-sushi_world/sushi-world-bg.webp',
      bgGradient: '',
      bgOverlay: 'none',
      text: 'Здравствуйте!\nВы на странице оценки качества ресторанов Мир суши' ,
      textFinish: 'Оставьте отзыв\nо нашей работе ' 
    },
    hero: {
      imageUrl: '/images/theme-spoke/hero-screen1.png',
      imageUrlScreen2: '/images/theme-spoke/hero-screen2.png',
      imageUrlScreen3: '/images/theme-spoke/hero-screen3.png',
      imageWidth: '140px',
      imageLeft: 'unset',
      imagetranslateX : 'unset',
      imageRight: '50px',
      captionFont: 'Caveat',
      captionText: '',
      show: true,
    },
    typography: {
      fontFamilyBase: "Evolventa",
      fontFamilyCaption: "Evolventa",
    },
    components: {
      borderRadiusCard: '30px',
      borderRadiusInput: '28px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
            SelectItemBorderRadius: '20px',
    },
  }
}

/**
 * Apply theme to document by setting CSS custom properties.
 * @param {string} themeId - One of: 'default' | 'spoke' | 'sushi-gallery' | 'mir-sushi' | 'sushi_world'
 */
export function applyTheme(themeId = 'default') {
  const theme = themes[themeId] || themes.default
  const root = document.documentElement

  // Colors (CSS custom properties for component styles)
  root.style.setProperty('--color-brand-primary', theme.colors.brandPrimary)
  root.style.setProperty('--color-brand-accent', theme.colors.brandAccent)
  root.style.setProperty('--color-header-text', theme.colors.headerText) // Color of title/divider text in header
  root.style.setProperty('--color-header-bg', theme.colors.headerBg) // Header background fill
  root.style.setProperty('--color-header-height', theme.header?.height || '27px') // Logo height in header

  root.style.setProperty('--color-text-primary', theme.colors.textPrimary) // Main text color
  root.style.setProperty('--color-text-secondary', theme.colors.textSecondary) // Secondary/muted text color
  root.style.setProperty('--color-link', theme.colors.link) // Link and accent text color
  root.style.setProperty('--color-bg-page-mobile', theme.colors.bgPageMobile) // Mobile page background
  root.style.setProperty('--color-bg-card', theme.colors.bgCard) // Cards and controls background
  root.style.setProperty('--color-dropdown-hover', theme.colors.dropdownHover) // Dropdown option hover background
  root.style.setProperty('--color-dropdown-chewron', theme.colors?.dropdownChevron || theme.colors.textSecondary) // Dropdown chevron icon color

  root.style.setProperty('--color-dropdown-hover-text', theme.colors.dropdownHoverText) // Dropdown option hover text
  root.style.setProperty('--color-input-border', theme.colors.inputBorder) // Inputs/select borders

  // Typography
  root.style.setProperty('--font-family-base', theme.typography.fontFamilyBase) // Base UI font
  root.style.setProperty('--font-family-caption', theme.typography.fontFamilyCaption) // Decorative caption font

  // Components
  root.style.setProperty('--radius-card', theme.components.borderRadiusCard) // Card corners radius
  root.style.setProperty('--border-card', theme.components?.cardBorder || 'none') // Card/select border style
  root.style.setProperty('--radius-input', theme.components.borderRadiusInput) // Input/select corners radius
  root.style.setProperty('--shadow-card', theme.components.shadowCard) // Card shadow on mobile
  root.style.setProperty('--shadow-card-desktop', theme.components.shadowCardDesktop) // Card shadow on desktop
  root.style.setProperty('--select-item-border-radius', theme.components?.SelectItemBorderRadius || '3px') // Dropdown item corners radius
  root.style.setProperty('--greeting-text-size', theme.components?.greetingTextSize || '20px') // Dropdown item corners radius

  // Hero visual position variables
  root.style.setProperty('--hero-image-width', theme.hero.imageWidth) // Hero image width
  root.style.setProperty('--hero-image-left', theme.hero.imageLeft) // Left offset
  root.style.setProperty('--hero-image-translateX', theme.hero.imagetranslateX) // Horizontal transform
  root.style.setProperty('--hero-image-right', theme.hero.imageRight) // Right offset
  root.style.setProperty('--hero-width', theme.hero.imageWidth) // Right offset

  // Desktop background (computed for CSS)
  const desktop = theme.desktop
  let desktopBg = desktop.bgColor
  if (desktop.bgType === 'image' && desktop.bgImage) {
    desktopBg = `url(${desktop.bgImage}) no-repeat center center`
  } else if (desktop.bgType === 'gradient' && desktop.bgGradient) {
    desktopBg = desktop.bgGradient
  }
  root.style.setProperty('--desktop-bg', desktopBg) // Desktop background image/gradient/color
  root.style.setProperty('--desktop-bg-overlay', desktop.bgOverlay) // Overlay layer over desktop background

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
