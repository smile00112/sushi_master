/**
 * Theme configuration for quick design switching.
 * Set themeId to: 'default' | 'spoke' | 'sushi_gallery' | 'mir_sushi'
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
      bgCard: '#F8F9FC',
      dropdownHover: '#BFCFFF33',//e8f4fc
      dropdownHoverText: '#6d6d6d',
      headerBg: '#ffffff',
      inputBorder: '0.2px solid #BFCFFF',
      selectScroolbarColor: '#fcfcfd33',

      
    },
    header: {
      style: 'white_minimal',
      brandColor: 'transparent',
      textColor: '#6d6d6d',
      logoUrl: '/images/logo.png',
      brandTitle: 'Центр оценки качества\nресторанов Суши Мастер',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e8e4e0',
      bgImage: '/images/hero-bg-desktop.png',
      bgGradient: '',
      bgOverlay: 'none',
      text: `Вы в центре заботы Суши Мастер! \n
      Мы внимательно читаем каждый отзыв, чтобы стать лучше. 
      Пожалуйста, поделитесь своими впечатлениями о заказе, а в знак благодарности мы подарим вам 200 баллов! 
      Как получить баллы? Читайте здесь: 
      ` ,
      promoUrl: 'https://sushi-master.ru/promotions/darim-200bb-kf',    
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
      cardBorder: '0.2px solid #BFCFFF',
      borderRadiusCard: '20px',
      borderRadiusInput: '8px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
      mapButtonBorder: '0.5px solid #BFCFFF',
      mapButtonBoxShadow: '0px 4px 16.7px 0px #BFCFFF33',
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
      inputBorder: '0.2px solid #83BB43',
      headerBg: '#4CAF50',
      selectScroolbarColor: '#f3ba9b',
    },
    header: {
      style: 'colored_bar',
      height: '44px',
      brandColor: '#4CAF50',
      textColor: '#fff',
      logoUrl: '/images/spoke_logo.png',
      brandTitle: 'Центр оценки качества \nресторанов Споке',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e8e4e0',
      bgImage: '/images/theme-spoke/spoke-bg.png',
      bgGradient: '',
      bgOverlay: 'none',
      text: 'Ваше мнение очень важно для Споке!\nМы внимательно прислушиваемся к обратной связи, чтобы расти и становиться лучше. Пожалуйста, оцените заказ и поделитесь впечатлениями' ,
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
      cardBorder: '0.2px solid #83BB43',
      borderRadiusCard: '30px',
      borderRadiusInput: '28px',
      shadowCard: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      shadowCardDesktop: '0 4px 24px rgba(0, 0, 0, 0.15)',
      SelectItemBorderRadius: '20px',
      greetingTextSize: '28px',
      finishCommentTextSize: '16px',
      finishCommentTextLineHeight: '100%',
      mapButtonBorder: '0.8px solid #83BB43',
      mapButtonBoxShadow: 'unset',
    },
  },
  'sushi_gallery': {
    colors: {
      brandPrimary: 'transparent',
      brandAccent: '#E91E63',
      headerText: '#2e2d31',
      textPrimary: '#2e2d31',
      textSecondary: '#6d6d6d',
      link: '#E91E63',
      bgPageMobile: '#e0e0e0',
      bgCard: '#FFFAFD',
      dropdownHover: '#E91E63',
      dropdownChevron: '#E91E63',
      dropdownHoverText: '#fff',
      inputBorder: '#e0e0e0',
      headerBg: '#ffffff',
      selectScroolbarColor: '#e692ae',
    },
    header: {
      style: 'white_minimal',
      brandColor: 'transparent',
      textColor: '#2e2d31',
      logoUrl: '/images/sushi_gallery_logo.png',
      brandTitle: 'Центр оценки качества \nресторанов Галерея Суши',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#e0e0e0',
      bgImage: '/images/theme-sushi_gallery/sushi_gallery-bg.webp',
      bgGradient: 'linear-gradient(90deg, #ffc8dd 0%, #b8e0d2 100%)',
      bgOverlay: 'none',
      text: `Ваше удовольствие – главная цель Галереи Суши! \n
      Мы внимательно читаем каждый отзыв, чтобы становиться лучше для вас. 
      Поделитесь своими впечатлениями о заказе и заберите приятный комплимент – 200 бонусных баллов!
      Как забрать свой бонус? Подробности тут:
      ` ,
      promoUrl: 'https://moskva.sushi-gallery.ru/promotions/darim-200bb-za-otzyv',
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
      mapButtonBorder: 'none',
      mapButtonBoxShadow: '1px 4px 6.9px 0px #BFCFFF40',
      cityBoxShadow: '1px 4px 6.9px 0px #BFCFFF40',

    },
  },
  'mir_sushi': {
    colors: {
      // cardBorder: '0.2px solid #83BB43',      
      // mapButtonBorder: '0.8px solid #83BB43',
      // mapButtonBoxShadow: 'unset',
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
      selectScroolbarColor: '#f8cc89',

    },
    header: {
      style: 'colored_bar',
      brandColor: '#2196F3',
      textColor: '#fff',
      logoUrl: '/images/sushi-world-logo.png',
      brandTitle: 'Центр оценки качества \nресторанов Мир Суши',
    },
    desktop: {
      bgType: 'image',
      bgColor: '#ADD8E6',
      bgImage: '/images/theme-sushi_world/sushi-world-bg.webp',
      bgGradient: '',
      bgOverlay: 'none',
      text: `Ваш комфорт – приоритет экипажа Мира Суши! \n
      Мы внимательно изучаем каждый отзыв, чтобы сделать наш сервис идеальным. 
      Поделитесь впечатлениями о вашем заказе и получите 200 баллов на бонусный счет! 
      Узнать правила начисления баллов:
      ` ,
      promoUrl: 'https://lyubercy.mirsushi.com/promotions/otziv_200bb_2703',
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
      mapButtonBorder: 'none',
      mapButtonBoxShadow: '0px 4px 20.2px 0px #BFCFFF33',
      cityBoxShadow: '1px 4px 6.9px 0px #BFCFFF40',
    },
  }
}

/**
 * Resolve requested theme id from URL/env.
 * This returns the raw requested value and does not validate against themes.
 * @returns {string}
 */
export function getRequestedThemeId() {
  return (
    new URLSearchParams(window.location.search).get('theme') ||
    import.meta.env.VITE_THEME ||
    'default'
  )
}

/**
 * Apply theme to document by setting CSS custom properties.
 * @param {string} themeId - One of: 'default' | 'spoke' | 'sushi_gallery' | 'mir_sushi' 
 */
export function applyTheme(themeId = 'default') {
  const theme = themes[themeId] || themes.default
  const root = document.documentElement
  root.dataset.themeId = themeId

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
  root.style.setProperty('--greeting-text-size', theme.components?.greetingTextSize || '20px') //
  root.style.setProperty('--finish-comment-text-size', theme.components?.finishCommentTextSize || '14px') // 
  root.style.setProperty('--finish-comment-line-height', theme.components?.finishCommentTextLineHeight || '1.33') //
  root.style.setProperty('--map-button-border', theme.components?.mapButtonBorder  || 'none') // 
  root.style.setProperty('--map-button-box-shadow', theme.components?.mapButtonBoxShadow || '1px 4px 6.9px 1px #BFCFFF40') //
  root.style.setProperty('--select-city-box-shadow', theme.components?.cityBoxShadow || 'unset') //
  root.style.setProperty('--select-scrollbar-color', theme.colors?.selectScroolbarColor || 'unset') //


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

/**
 * Get requested theme id stored by applyTheme().
 * Falls back to URL/env when data attribute is absent.
 * @returns {string}
 */
export function getThemeId() {
  return document.documentElement.dataset.themeId || getRequestedThemeId()
}

export { themes }
export default themes
