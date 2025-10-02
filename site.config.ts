import { siteConfig } from './lib/site-config.ts'
import locale from './site.locale.json'

export default siteConfig({
  notionDbIds: [
    '27f600ddb8ea819bbef4c4999dbed470',
    '24c600ddb8ea80cf829dcfd3fd8200c0'
  ],

  // basic site info (required)
  name: 'Knowtionite',
  domain: 'knowtion-teal.vercel.app/',
  author: 'Duy Khiem',

  // open graph metadata (optional)
  description: 'Where your notes evolve into a knowledge engine',

  // DNS record for domain verification (optional)
  // Replace with your actual Google Search Console verification code
  dnsRecord: '_QZy3wmjCIgdXI6R_HH1kRLcZJR5OkAUDRj3NiMGKxs', 

  // hero section (optional)
  heroAssets: [
    {
      type: 'video',
      src: '/hero-assets/noxionite-shiny-short.mov',
      url: 'https://noxionite.vercel.app/',
      content: {
        en: {
          title: 'Noxionite',
          description: 'Your Notion pages, reborn as a stunning blog.'
        },
        ko: {
          title: 'Noxionite',
          description: 'Notion으로 만드는 가장 아름다운 블로그'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/notion-compatible.mp4',
      url: 'https://noxionite.vercel.app/post/features-notion',
      content: {
        en: {
          title: '1. Perfect Notion Compatibility',
          description: 'All Notion blocks rendered beautifully and effortlessly.'
        },
        ko: {
          title: '1. Notion 완벽 호환',
          description: 'Notion의 모든 블록을 가장 쉽고 아름답게.'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/super-fast-routing.mp4',
      content: {
        en: {
          title: '2. Lightning-Fast Routing',
          description: 'Ultra-fast routing under 0.2 seconds with ISR caching.'
        },
        ko: {
          title: '2. 빛보다 빠른 라우팅',
          description: 'ISR 캐싱으로 0.2초 내의 매우 빠른 라우팅.'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/unlimited-nested-category.mp4',
      url: 'https://noxionite.vercel.app/post/fetures-folder-category',
      content: {
        en: {
          title: '3. Unlimited Nested Categories',
          description: 'Flexible and systematic blog management with folder-style categories.'
        },
        ko: {
          title: '3. 무한 폴더식 카테고리',
          description: '폴더 형태의 카테고리로 자유롭고 체계적인 블로그 관리.'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/graph-view.mp4',
      url: 'https://noxionite.vercel.app/post/features-graph-view',
      content: {
        en: {
          title: '4. Graph View',
          description: 'Real-time interactive graph view and tag visualization.'
        },
        ko: {
          title: '4. 그래프 뷰',
          description: '실시간으로 업데이트 되는 인터랙티브 그래프 뷰와 태그 뷰'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/glassmorphism.mp4',
      url: 'https://noxionite.vercel.app/post/fetures-glassmorphism',
      content: {
        en: {
          title: '5. Captivating Glassmorphism',
          description: 'Glassmorphism and responsive design applied to every page.'
        },
        ko: {
          title: '5. 매혹적인 글래스모피즘',
          description: '모든 페이지에 적용된 글래스모피즘과 반응형 디자인'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/multi-language.mp4',
      url: 'https://noxionite.vercel.app/post/fetures-multilanguage',
      content: {
        en: {
          title: '6. 23+ Language Translation Support',
          description: 'Easily manage multilingual content in a single blog.'
        },
        ko: {
          title: '6. 23+개 국어 번역 지원',
          description: '하나의 블로그에서 여러 언어의 글을 쉽게 관리.'
        }
      }
    },
    {
      type: 'video',
      src: '/hero-assets/noxionite-shiny-reverse.mov',
      content: {
        en: {
          title: '7. Fully Open Source',
          description: 'Completely free with unlimited customization under MIT license.'
        },
        ko: {
          title: '7. 완전한 오픈 소스',
          description: 'MIT 라이센스로 완전히 무료로 무궁무진한 커스터마이징.'
        }
      }
    },
  ],

  // author metadata (optional)
  authors: [
    {
      name: 'Duy Khiem',                       // Author name
      avatar_dir: '/authors/duykhiem.jpg',   // Author avatar image path in public folder (28px x 28px recommended)
      home_url: 'https://duykhiem.vercel.app/',   // Author home URL
    }
  ],

  // social links, the order is preserved.
  socials: {
    github: 'the-khiem7',  // optional github username
    linkedin: 'the-khiem7', // optional linkedin username
    // youtube: 'channel/UCV7iVbVip33wD_rsiQLSubg?si=Tf0bKAPvtDY_J833', // optional youtube channel id eg. channel/UCXXXXXXXXXXXXXXXXXXXXXX
    // instagram: 'the-khiem7', // optional instagram username
    // tiktok: '#', // optional tiktok username
    // threads: '#', // optional threads username
    facebook: 'khiemnguyen120216',  // optional facebook profile id on profile page eg. 1000XXXXXXXXXXX
    // twitter: '#', // optional twitter username
    // mastodon: '#', // optional mastodon profile URL, provides link verification
    // newsletter: '#' // optional personal newsletter URL
  },

  // locale configuration
  locale,

  // Incremental Static Regeneration (ISR) configuration
  isr: {
    revalidate: 60 // revalidate time in seconds
  }
})
