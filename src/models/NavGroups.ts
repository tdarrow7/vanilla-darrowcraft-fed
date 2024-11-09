export enum NavGroups {
    'PRI' = 'PRI',
    'SEC' = 'SEC'
}

export interface PageModel {
    id: number,
    name: string,
    href: string,
    target?:string,
    seq: number,
    navGroups?: NavGroups[]
}

export const sitemap:PageModel[] = [
    {id: 1, name: 'Coffee', href: '/coffee', target: '', seq: 60, navGroups: [NavGroups.PRI]},
    {id: 2, name: 'Our Brands', href: '/brands', target: '', seq: 70, navGroups: [NavGroups.PRI]},
    {id: 3, name: 'Roast Types', href: '/roast-types', target: '', seq: 80, navGroups: [NavGroups.PRI]},
    {id: 4, name: 'Reviews', href: '/', target: '', seq: 90, navGroups: [NavGroups.PRI]},
    { id: 5, name: 'Home', href: '/', target: '', seq: 10, navGroups: [NavGroups.SEC]},
    { id: 6, name: 'Sign In', href: '/sign-in', target: '', seq: 20, navGroups: [NavGroups.SEC]},
    { id: 7, name: 'API', href: 'https://api.timdarrow.com', target: '_blank', seq: 30, navGroups: [NavGroups.SEC]},
    { id: 8, name: 'LinkedIn', href: 'https://www.linkedin.com/in/tdarrow7/', target: '_blank', seq: 40, navGroups: [NavGroups.SEC]},
    { id: 9, name: 'GitHub', href: 'https://github.com/tdarrow7', target: '_blank', seq: 50, navGroups: [NavGroups.SEC]},
]

// export const secondaryNavLinks = [
// ]

