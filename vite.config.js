import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: { 
      name: 'My APP Vite PWA' ,
      short_name: 'Vite PWA',
      theme_color: '#90AACB',
      background_color: '#F9D5A7',
      description: 'This is a practice with Vite PWA using react and the manifest',
      icons: [
        {
          "src": "assets/windows11/SmallTile.scale-100.png",
          "sizes": "71x71"
        },
        {
          "src": "assets/windows11/SmallTile.scale-125.png",
          "sizes": "89x89"
        },
        {
          "src": "assets/windows11/SmallTile.scale-150.png",
          "sizes": "107x107"
        },
        {
          "src": "assets/windows11/SmallTile.scale-200.png",
          "sizes": "142x142"
        },
        {
          "src": "assets/windows11/SmallTile.scale-400.png",
          "sizes": "284x284"
        },
        {
          "src": "assets/windows11/Square150x150Logo.scale-100.png",
          "sizes": "150x150"
        },
        {
          "src": "assets/windows11/Square150x150Logo.scale-125.png",
          "sizes": "188x188"
        },
        {
          "src": "assets/windows11/Square150x150Logo.scale-150.png",
          "sizes": "225x225"
        },
        {
          "src": "assets/windows11/Square150x150Logo.scale-200.png",
          "sizes": "300x300"
        },
        {
          "src": "assets/windows11/Square150x150Logo.scale-400.png",
          "sizes": "600x600"
        },
        {
          "src": "assets/windows11/Wide310x150Logo.scale-100.png",
          "sizes": "310x150"
        },
        {
          "src": "assets/windows11/Wide310x150Logo.scale-125.png",
          "sizes": "388x188"
        },
        {
          "src": "assets/windows11/Wide310x150Logo.scale-150.png",
          "sizes": "465x225"
        },
        {
          "src": "assets/windows11/Wide310x150Logo.scale-200.png",
          "sizes": "620x300"
        },
        {
          "src": "assets/windows11/Wide310x150Logo.scale-400.png",
          "sizes": "1240x600"
        },
        {
          "src": "assets/windows11/LargeTile.scale-100.png",
          "sizes": "310x310"
        },
        {
          "src": "assets/windows11/LargeTile.scale-125.png",
          "sizes": "388x388"
        },
        {
          "src": "assets/windows11/LargeTile.scale-150.png",
          "sizes": "465x465"
        },
        {
          "src": "assets/windows11/LargeTile.scale-200.png",
          "sizes": "620x620"
        },
        {
          "src": "assets/windows11/LargeTile.scale-400.png",
          "sizes": "1240x1240"
        },
        {
          "src": "assets/windows11/Square44x44Logo.scale-100.png",
          "sizes": "44x44"
        },
        {
          "src": "assets/windows11/Square44x44Logo.scale-125.png",
          "sizes": "55x55"
        },
        {
          "src": "assets/windows11/Square44x44Logo.scale-150.png",
          "sizes": "66x66"
        },
        {
          "src": "assets/windows11/Square44x44Logo.scale-200.png",
          "sizes": "88x88"
        },
        {
          "src": "assets/windows11/Square44x44Logo.scale-400.png",
          "sizes": "176x176"
        },
        {
          "src": "assets/windows11/StoreLogo.scale-100.png",
          "sizes": "50x50"
        },
        {
          "src": "assets/windows11/StoreLogo.scale-125.png",
          "sizes": "63x63"
        },
        {
          "src": "assets/windows11/StoreLogo.scale-150.png",
          "sizes": "75x75"
        },
        {
          "src": "assets/windows11/StoreLogo.scale-200.png",
          "sizes": "100x100"
        },
        {
          "src": "assets/windows11/StoreLogo.scale-400.png",
          "sizes": "200x200"
        },
        {
          "src": "assets/windows11/SplashScreen.scale-100.png",
          "sizes": "620x300"
        },
        {
          "src": "assets/windows11/SplashScreen.scale-125.png",
          "sizes": "775x375"
        },
        {
          "src": "assets/windows11/SplashScreen.scale-150.png",
          "sizes": "930x450"
        },
        {
          "src": "assets/windows11/SplashScreen.scale-200.png",
          "sizes": "1240x600"
        },
        {
          "src": "assets/windows11/SplashScreen.scale-400.png",
          "sizes": "2480x1200"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-16.png",
          "sizes": "16x16"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-20.png",
          "sizes": "20x20"
        },
        {
          "src": "assets/assets/windows11/Square44x44Logo.targetsize-24.png",
          "sizes": "24x24"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-30.png",
          "sizes": "30x30"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-32.png",
          "sizes": "32x32"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-36.png",
          "sizes": "36x36"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-40.png",
          "sizes": "40x40"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-44.png",
          "sizes": "44x44"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-48.png",
          "sizes": "48x48"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-60.png",
          "sizes": "60x60"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-64.png",
          "sizes": "64x64"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-72.png",
          "sizes": "72x72"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-80.png",
          "sizes": "80x80"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-96.png",
          "sizes": "96x96"
        },
        {
          "src": "assets/windows11/Square44x44Logo.targetsize-256.png",
          "sizes": "256x256"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          "sizes": "16x16"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          "sizes": "20x20"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          "sizes": "24x24"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          "sizes": "30x30"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          "sizes": "32x32"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          "sizes": "36x36"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          "sizes": "40x40"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          "sizes": "44x44"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          "sizes": "48x48"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          "sizes": "60x60"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          "sizes": "64x64"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          "sizes": "72x72"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          "sizes": "80x80"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          "sizes": "96x96"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          "sizes": "256x256"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          "sizes": "16x16"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          "sizes": "20x20"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          "sizes": "24x24"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          "sizes": "30x30"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          "sizes": "32x32"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          "sizes": "36x36"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          "sizes": "40x40"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          "sizes": "44x44"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          "sizes": "48x48"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          "sizes": "60x60"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          "sizes": "64x64"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          "sizes": "72x72"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          "sizes": "80x80"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          "sizes": "96x96"
        },
        {
          "src": "assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          "sizes": "256x256"
        },
        {
          "src": "assets/android/android-launchericon-512-512.png",
          "sizes": "512x512"
        },
        {
          "src": "assets/android/android-launchericon-192-192.png",
          "sizes": "192x192"
        },
        {
          "src": "assets/android/android-launchericon-144-144.png",
          "sizes": "144x144"
        },
        {
          "src": "assets/android/android-launchericon-96-96.png",
          "sizes": "96x96"
        },
        {
          "src": "assets/android/android-launchericon-72-72.png",
          "sizes": "72x72"
        },
        {
          "src": "assets/android/android-launchericon-48-48.png",
          "sizes": "48x48"
        },
        {
          "src": "assets/ios/16.png",
          "sizes": "16x16"
        },
        {
          "src": "assets/ios/20.png",
          "sizes": "20x20"
        },
        {
          "src": "assets/ios/29.png",
          "sizes": "29x29"
        },
        {
          "src": "assets/ios/32.png",
          "sizes": "32x32"
        },
        {
          "src": "assets/ios/40.png",
          "sizes": "40x40"
        },
        {
          "src": "assets/ios/50.png",
          "sizes": "50x50"
        },
        {
          "src": "assets/ios/57.png",
          "sizes": "57x57"
        },
        {
          "src": "assets/ios/58.png",
          "sizes": "58x58"
        },
        {
          "src": "assets/ios/60.png",
          "sizes": "60x60"
        },
        {
          "src": "assets/ios/64.png",
          "sizes": "64x64"
        },
        {
          "src": "assets/ios/72.png",
          "sizes": "72x72"
        },
        {
          "src": "assets/ios/76.png",
          "sizes": "76x76"
        },
        {
          "src": "assets/ios/80.png",
          "sizes": "80x80"
        },
        {
          "src": "assets/ios/87.png",
          "sizes": "87x87"
        },
        {
          "src": "assets/ios/100.png",
          "sizes": "100x100"
        },
        {
          "src": "assets/ios/114.png",
          "sizes": "114x114"
        },
        {
          "src": "assets/ios/120.png",
          "sizes": "120x120"
        },
        {
          "src": "assets/ios/128.png",
          "sizes": "128x128"
        },
        {
          "src": "assets/ios/144.png",
          "sizes": "144x144"
        },
        {
          "src": "assets/ios/152.png",
          "sizes": "152x152"
        },
        {
          "src": "assets/ios/167.png",
          "sizes": "167x167"
        },
        {
          "src": "assets/ios/180.png",
          "sizes": "180x180"
        },
        {
          "src": "assets/ios/192.png",
          "sizes": "192x192"
        },
        {
          "src": "assets/ios/256.png",
          "sizes": "256x256"
        },
        {
          "src": "assets/ios/512.png",
          "sizes": "512x512"
        },
        {
          "src": "assets/ios/1024.png",
          "sizes": "1024x1024"
        }
      ],
    }
  })],
})
