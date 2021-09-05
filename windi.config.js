import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['src/**/*.{html,jsx,tsx}'],
    exclude: ['node_modules', '.git', '.husky'],
  },
})
