/** @type {import('prettier').Config} */
export default {
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ],
    singleQuote: true,
    endOfLine: 'auto',
    trailingComma: 'none',
    semi: true,
    tabWidth: 4,
    printWidth: 80
};
