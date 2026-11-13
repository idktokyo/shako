import type { Config } from '@/types'

const config: Config = {
  page: {
    title: 'd',
    footer: true,
    borderRadius: 0.5,
    background: 'flickering-grid',
    // redirects: {
    //   'discord': 'https://discord.gg/chiemthuymai',
    // },
  },
  user: {
    //* Setting name and avatar will override the Lanyard user data
    // name: 'duc',
    // avatar: 'https://avatars.githubusercontent.com/u/28254289?v=4',
    // bio: 'Software Engineer',
    discordId: '1463044159358369877',
  },
  api: {
    //* Lanyard API URL (default: https://api.lanyard.rest/)
    lanyardUrl: 'https://api.lanyard.rest/',
  },
  links: {
    //* Social links (small buttons on the top)
    social: [
      {
        icon: 'patreon',
        url: 'https://patreon.com/keksi',
      },
      {
        icon: 'buymeacoffee',
        url: 'https://www.buymeacoffee.com/keksi',
      },
      {
        icon: 'githubsponsors',
        url: 'https://github.com/sponsors/keksiqc',
      },
    ],
    //* Primary links (big buttons)
    primary: [
      {
        label: 'GitHub',
        icon: 'github',
        url: 'https://github.com/mutejoey',
      },
      {
        label: 'Discord',
        icon: 'discord',
        url: 'https://discord.com/users/1463044159358369877',
      },
      {
        label: 'Twitter',
        icon: 'x',
        url: 'https://x.com/cressrose6',
      },
      {
        label: 'Bluesky',
        icon: 'bluesky',
        url: 'https://bsky.app/profile/emnhoanhkhong',
      },
      {
        label: 'Steam',
        icon: 'steam',
        url: 'https://steamcommunity.com/id/keksiqc',
      },
      {
        label: 'AniList',
        icon: 'anilist',
        url: 'https://anilist.co/user/keksi',
      },
      {
        label: 'Simkl',
        icon: 'simkl',
        url: 'https://simkl.com/7534025',
      },
    ],
  },
}

export default config
