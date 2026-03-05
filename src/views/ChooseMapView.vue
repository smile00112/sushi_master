<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeroBlock from '@/components/HeroBlock.vue'
import { getTheme } from '@/config/theme'
import { loadThemeData } from '@/data/themeData'

const route = useRoute()
const router = useRouter()
const cities = ref([])
const textFinish = ref('')
const dataError = ref('')

const cityId = computed(() => route.query.cityId || '')
const establishmentName = computed(() => route.query.establishment || '')

const establishment = computed(() => {
  const city = cities.value.find((c) => c.id === cityId.value)
  if (!city?.establishments) return null
  return city.establishments.find((e) => e.name === establishmentName.value) || null
})

onMounted(async () => {
  try {
    const data = await loadThemeData()
    cities.value = data.cities
  } catch (error) {
    cities.value = []
    dataError.value = error instanceof Error ? error.message : 'Ошибка загрузки данных.'
  }

  const theme = getTheme()
  textFinish.value = theme?.desktop?.textFinish || ''

})

watch([establishment, cities], ([est]) => {
  if (cities.value.length > 0 && (cityId.value || establishmentName.value) && !est) {
    router.replace({ name: 'home' })
  }
})

function openYandex() {
  if (establishment.value?.yandexMaps) {
    window.open(establishment.value.yandexMaps, '_blank', 'noopener,noreferrer')
  }
}

function open2gis() {
  if (establishment.value?.link2gis) {
    window.open(establishment.value.link2gis, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <div class="screen choose-map-screen">
    <p class="greeting" v-if="textFinish">
      {{ textFinish }}
    </p>

    <p v-if="dataError" class="data-error">{{ dataError }}</p>

    <template v-else>
    <p v-if="establishment" class="establishment-name">{{ establishment.name }}</p>
    <p class="choose-label">Обычно люди не находят времени оставить отзывы, если им все понравилось. А вы нашли. Мы это ценим. Оставьте, пожалуйста, отзыв на любом из сайтов:</p>

    <div class="map-links">
        <div
          type="button"
          class="map-a-card"
          :disabled="!establishment?.yandexMaps"
          @click="openYandex"
          v-if="establishment?.yandexMaps"
        > 
          <svg width="104" height="30" class="map-link-card" viewBox="0 0 104 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6754 3.47597H10.6652C6.97986 3.47597 5.05342 5.31866 5.05342 8.05476C5.05342 11.1538 6.39355 12.5917 9.14362 14.4483L11.4051 15.956L4.85798 25.6719H0L5.87704 16.989C2.49879 14.5879 0.600268 12.2566 0.600268 8.30604C0.600268 3.35033 4.06228 0 10.6373 0H17.1705V25.6719H12.6754V3.47597Z" fill="#E63F0C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.222 22.2099H42.982C44.2104 19.404 44.5455 14.3366 44.5455 11.1259V10.5675H49.2359V22.2099H49.222ZM53.6472 7.10547H40.7484V8.69688C40.7484 13.2338 40.4553 19.1108 38.8918 22.2099H37.5098V29.9296H41.6V25.6859H51.5253V29.9296H55.6155V22.2099H53.6472V7.10547Z" fill="#000003"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2281 14.4483H25.3232V7.10547H20.8979V25.6859H25.3232V17.9243H31.2281V25.6859H35.6534V7.10547H31.2281V14.4483Z" fill="#000003"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.7144 10.2046C101.431 10.2046 103.093 10.7909 103.986 11.3493V7.62206C103.051 7.10555 101.418 6.72864 99.2259 6.72864C93.5722 6.72864 90.6406 10.749 90.6406 16.4027C90.6406 22.6148 93.5024 26.0489 99.4213 26.0489C101.473 26.0489 102.911 25.6859 104 24.9042V21.3166C102.883 22.0983 101.543 22.5729 99.6865 22.5729C96.5316 22.5729 95.2194 20.13 95.2194 16.291C95.2194 12.2706 96.8248 10.2046 99.7144 10.2046Z" fill="#000003"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.0542 7.10547H85.5871L79.3471 15.6767V7.10547H74.9219V25.6859H79.3471V16.5562L85.8942 25.6859H90.9058L83.8003 15.6767L90.0542 7.10547Z" fill="#000003"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.4396 14.7136H61.2694C61.3811 11.7541 62.456 10.2046 64.5779 10.2046C66.7695 10.2046 67.4396 12.0194 67.4396 14.3367V14.7136ZM64.6616 6.72864C59.2732 6.72864 56.7046 10.8328 56.7046 16.4446C56.7046 22.908 59.9014 26.0489 65.5551 26.0489C68.3749 26.0489 70.4689 25.309 71.7671 24.4296V20.8419C70.3851 21.7633 68.0818 22.5729 65.932 22.5729C62.6933 22.5729 61.4649 21.0653 61.2834 17.9523H71.9486V15.621C71.9486 9.17159 69.0869 6.72864 64.6616 6.72864Z" fill="#000003"/>
          </svg>

        </div>

        <div
          class="map-a-card"
          :disabled="!establishment?.link2gis"
          @click="open2gis"
          v-if="establishment?.link2gis"

        >
        <svg width="101" height="33" viewBox="0 0 101 33" class="map-link-card" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_605_262)">
          <mask id="mask0_605_262" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="34">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1305 0.0202578L9.5344 0L24.0986 0.0101289C24.3208 0.0101289 24.4521 0.0101289 24.5935 0.0202578C25.3106 0.0405157 26.0479 0.0810313 26.7549 0.212707C27.4821 0.344383 28.1487 0.55709 28.8153 0.891344C30.1182 1.54972 31.1787 2.60313 31.8352 3.90976C32.1685 4.56814 32.3806 5.23665 32.5119 5.96593C32.6432 6.67495 32.6836 7.40424 32.7038 8.12339C32.7139 8.45764 32.7139 8.78177 32.7139 9.11602V9.7035V22.7394C32.7139 23.1344 32.7139 23.5193 32.7139 23.9144C32.7139 24.2486 32.7038 24.5727 32.7038 24.907C32.6836 25.6262 32.6432 26.3554 32.5119 27.0645C32.3806 27.7836 32.1685 28.4622 31.8352 29.1206C31.5019 29.7689 31.0777 30.3564 30.5626 30.8628C30.0475 31.3794 29.4617 31.8048 28.8052 32.1289C28.1487 32.4632 27.472 32.6759 26.7448 32.8076C26.0277 32.9392 25.3005 32.9797 24.5834 33L22.4119 33.0203L8.6254 33.0101C8.4638 33.0101 8.2921 33.0101 8.1305 33C7.4134 32.9797 6.6761 32.9392 5.9691 32.8076C5.2419 32.6759 4.5753 32.4632 3.9087 32.1289C2.6058 31.4705 1.5453 30.4171 0.8787 29.1105C0.5454 28.4521 0.3333 27.7836 0.202 27.0543C0.0707 26.3453 0.0303 25.616 0.0101 24.8969C0.0101 24.5626 0 24.2284 0 23.9042V23.3168V10.2808C0 9.88582 0 9.50092 0 9.10589C0 8.77164 0.0101 8.44751 0.0101 8.11326C0.0303 7.39411 0.0707 6.66483 0.202 5.9558C0.3333 5.22652 0.5454 4.55801 0.8888 3.89963C1.5554 2.60313 2.6159 1.53959 3.9188 0.881216C4.5652 0.546961 5.2419 0.334254 5.9691 0.202578C6.6862 0.0810313 7.4134 0.0405157 8.1305 0.0202578Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_605_262)">
          <path d="M0 0H32.7139V33H0V0Z" fill="#19AA1E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H32.7139V10.8278L0 5.67219V0Z" fill="#FFB919"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 29.384L32.7139 24.2284V32.9899H0V29.384Z" fill="#82D714"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.02393L11.4231 6.82687C12.8472 5.91527 14.5339 5.41895 16.362 5.41895C18.887 5.41895 21.1595 6.37107 22.8159 8.05247C23.028 8.26518 23.2199 8.48801 23.4017 8.71085L32.7139 10.1795V11.4862L24.341 10.1694C24.9672 11.3748 25.3005 12.7219 25.3005 14.0792C25.3005 15.8517 24.9066 17.6142 24.0986 19.3766L24.0784 19.4272L23.735 20.1667H22.9169C21.2403 20.1667 20.1192 20.6731 19.392 21.5746C18.8163 22.2836 18.4931 23.2357 18.382 24.2689V24.2992L18.3618 24.4613L18.3517 24.5322L18.3416 24.674C18.3012 25.1399 18.2709 25.5248 18.2608 25.849L32.724 23.57V24.8766L0 30.0423V28.7357L14.4834 26.4567L14.4733 26.163V26.0819V26.0414V25.9806C14.4531 25.5248 14.4228 25.069 14.3723 24.6132L14.3622 24.512L14.342 24.3296C14.241 23.2864 13.9077 22.3241 13.3421 21.605C12.625 20.7035 11.514 20.1869 9.8475 20.1768H8.989L8.6456 19.4374C7.8174 17.6446 7.4134 15.872 7.4134 14.0792C7.4134 11.8306 8.3123 9.66297 9.9081 8.05247C9.9586 8.00183 9.999 7.96131 10.0495 7.91067L0 6.32043V5.02393Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.362 6.70532C20.9272 6.70532 24.0279 10.2504 24.0279 14.0792C24.0279 15.6188 23.6946 17.209 22.9169 18.8904C18.4224 18.8904 17.3114 22.1418 17.0993 24.1777L17.0892 24.3094C17.0185 25.0387 16.9781 25.6261 16.968 26.0617L15.7459 26.2541V26.2136C15.7459 25.7477 15.6954 25.0994 15.6146 24.2689V24.2283C15.4227 22.1924 14.3319 18.8803 9.79704 18.8803C9.01934 17.209 8.68604 15.6086 8.68604 14.069C8.68604 10.2504 11.7867 6.70532 16.362 6.70532Z" fill="#0073FA"/>
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M48.1267 8.08289C44.1776 8.08289 41.2284 10.5442 41.2486 14.8287H44.9149C44.8644 13.117 45.9249 11.4558 48.1267 11.4558C49.7932 11.4558 50.8537 12.6004 50.8537 14.0488C50.8537 15.558 49.6922 16.3886 47.8237 17.3205C45.3694 18.5359 43.9049 19.1133 41.2486 20.0147V24.9475H54.9038V21.5746H46.2077C47.4702 21.0276 48.7125 20.4402 49.8235 19.8932C52.7828 18.4448 54.5301 16.8039 54.5301 13.8766C54.5301 10.3416 51.9445 8.08289 48.1267 8.08289ZM60.4689 11.7192H67.549V8.34624H56.9339V24.9475H60.4689V11.7192ZM73.1141 8.34624H69.5791V24.9475H73.0939L79.6892 14.3426V24.9475H83.2242V8.34624H79.6892L73.1141 18.9512V8.34624ZM101 18.7182H97.3339C96.7784 20.5617 95.0816 21.8278 93.0818 21.8278C90.173 21.8278 88.2742 19.2551 88.2742 16.6418C88.2742 14.0286 90.1225 11.4558 93.1828 11.4558C95.2028 11.4558 96.7683 12.7321 97.3339 14.5654H101C100.465 10.8582 97.6167 8.08289 93.0818 8.08289C88.0722 8.08289 84.7392 11.6888 84.7392 16.6418C84.7392 21.5949 88.0722 25.2007 93.0818 25.2007C97.6167 25.2109 100.465 22.4862 101 18.7182Z" fill="#262626"/>
          </g>
          <defs>
          <clipPath id="clip0_605_262">
          <rect width="101" height="33" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    </template>

    <HeroBlock caption="куда открыть?" />
  </div>
</template>

<style scoped>

.greeting {
  font-family: var(--font-family-caption);
  font-size: var(--greeting-text-size);
  font-weight: 400;
  line-height: 1.33;
  color: var(--color-text-primary);
  margin: 49px 0 20px;
  padding: 0;
  white-space: pre-line;
}
.establishment-name {
  display:none;
  font-family: var(--font-family-base);
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin: 0 0 8px;
}
.choose-label {
  font-family: var(--font-family-base);
  font-size: var(--finish-comment-text-size);;
  color: var(--color-text-secondary);
  margin: 0 0 51px;
  line-height: var(--finish-comment-text-line-height);
  text-align: justify;
}
.map-links {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    flex-direction: row;
}
.map-a-card{
    display: flex;
    max-width: 45%;
    flex-basis: 210px;
    flex-shrink: 1;
    height: 118px;
    border-radius: 25px;
    border: var(--map-button-border);
    box-shadow: var(--map-button-box-shadow);
    box-shadow: 1px 4px 6.9px 1px #BFCFFF40;
    align-content: center;
    align-items: center;
    background-color: #fff;
}
.map-link-card {
  border: unset;
  padding: 0;
  width: 100%;
}

.map-link-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.data-error {
  margin: 0 0 24px;
  color: #c62828;
  font-size: 14px;
}

@media (max-height: 768px) {
  .choose-label{
      margin: 0 0 25px;
  }
  .greeting{
    margin: 20px 0 20px;
  }
}

</style>
