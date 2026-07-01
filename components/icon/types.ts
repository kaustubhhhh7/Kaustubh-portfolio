export const iconNames = {
    telegram: 'telegram',
    github: 'github',
    linkedin: 'linkedin',
    web: 'web',
    facebook: 'facebook',
    instagram: 'instagram',
    left: 'left',
    right: 'right',
    startup: 'startup',
    alumni: 'alumni',
    ai: 'ai',
    shop: 'shop',
    agency: 'agency',
    trees: 'trees',
    whatsapp: 'whatsapp',
    law: 'law',
    plane: 'plane',
    layout: 'layout',
    file: 'file'
} as const

export type IconTypes = keyof typeof iconNames
