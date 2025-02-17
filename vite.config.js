import vituum from 'vituum'
import handlebars from '@vituum/vite-plugin-handlebars'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import customHelpers from 'handlebars-helpers'

const assetsFix = () => {
   return {
      name: 'no-attribute',
      transformIndexHtml(html) {
         html = html.replaceAll('/assets', 'assets')
         html = html.replaceAll('crossorigin ', '')
         html = html.replaceAll('  <script type=', '    <script type=')
         html = html.replaceAll(`  <link rel="stylesheet`, `    <link rel="stylesheet`)

         const parts = html.split('</head>')
         const head = parts[0].replaceAll(/(\r)/gm, '')
         html = head + '</head>' + parts[1]

         return html
      },
   }
}

export default {
   // base: './',
   server: {
      host: '0.0.0.0',
   },
   plugins: [
      customHelpers(),
      assetsFix(),
      vituum({
         input: ['./src/style/*.{css,pcss,scss,sass,less,styl,stylus}', './src/script/*.{js,ts,mjs}'],
         paths: ['./src/style/*/**', './src/script/*/**'],
      }),
      handlebars({
         root: './src',
         data: ['src/data/**/*.json'],
         helpers: {
            object: function ({ hash }) {
               return hash
            },
            array: function () {
               return Array.from(arguments).slice(0, arguments.length - 1)
            },
            times: function (n, block) {
               var accum = ''
               for (var i = 0; i < n; ++i) accum += block.fn(i)
               return accum
            },
            for: function (from, to, incr, block) {
               var accum = ''
               for (var i = from; i < to; i += incr) accum += block.fn(i)
               return accum
            },
            jsv: function () {
               return 'javascript:void(0)'
            },
         },
      }),
      tailwindcss({ outDir: './dist' }),
   ],
   build: {
      modulePreload: {
         polyfill: false,
      },
      rollupOptions: {
         output: {
            chunkFileNames: 'assets/script/[name].js',
            entryFileNames: 'assets/script/[name].js',

            assetFileNames: ({ name }) => {
               if (/\.css$/.test(name ?? '')) {
                  return 'assets/style/[name][extname]'
               }
            },
         },
      },
   },
}
