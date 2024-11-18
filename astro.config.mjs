// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

export default defineConfig({
    site: 'https://demo-astro.ovfteam.com',

    integrations: [
        tailwind(),
        sitemap(),
        robotsTxt(),
        icon({
            include: {
                mdi: ['*']
            }
        })
    ],

    image: {},

    devToolbar: {
        enabled: false
    },

    build: {
        inlineStylesheets: 'auto',
        assets: '_ovftank'
    },

    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'load'
    },

    output: 'server',
    adapter: netlify({
        imageCDN: true
    })
});
