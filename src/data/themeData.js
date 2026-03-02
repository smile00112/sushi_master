import { getThemeId } from '@/config/theme'

let dataPromise = null

async function loadAllThemeData() {
  if (!dataPromise) {
    dataPromise = fetch('/data/cities.json').then(async (res) => {
      if (!res.ok) {
        throw new Error(`Не удалось загрузить данные: HTTP ${res.status}`)
      }

      return res.json()
    })
  }

  return dataPromise
}

/**
 * Load city/review data for the current theme.
 * Strict mode: throws when the selected theme section is absent.
 * @returns {Promise<{ cities: Array, reviewSites: Array }>}
 */
export async function loadThemeData() {
  const themeId = getThemeId()
  const allData = await loadAllThemeData()
  const themeData = allData?.[themeId]

  if (!themeData) {
    throw new Error(`Для шаблона "${themeId}" не найдены данные.`)
  }

  return {
    cities: Array.isArray(themeData.cities) ? themeData.cities : [],
    reviewSites: Array.isArray(themeData.reviewSites) ? themeData.reviewSites : []
  }
}
