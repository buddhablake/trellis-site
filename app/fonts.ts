import { Source_Serif_4, DM_Sans } from 'next/font/google'

export const freight = DM_Sans({
  subsets: ['latin'],
  variable: '--font-freight',
  weight: ['400', '500', '700'],
})

export const source = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '600'],
})
