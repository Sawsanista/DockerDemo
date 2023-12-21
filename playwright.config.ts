import { defineConfig, devices } from '@playwright/test';


 require('dotenv').config();

 export default defineConfig({
 fullyParallel: true,
//  globalTimeout: 500000,
 workers: process.env.CI ? 1 : undefined,
 reporter:'allure-playwright',

 retries: 3,

  use: {
    baseURL : process.env.DEV==='1'?'https://bmsdev.dev.kaseya.net'
             :process.env.PREVIEW=='1'?'https://na1bmspreview.kaseya.com'
             :'https://bmsdev.dev.kaseya.net',

    
    trace: 'on-first-retry',
    video:{
      mode: 'on',
      size: {width: 1920, height: 1080}
    }
  },

  projects: [
    
    {
      name: 'chromium',
      use: {
        browserName:'chromium' 
         }
    }

    // {
    //   name: 'firefox',
    //   use: { 
    //     browserName:'firefox' 
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //   browserName:'webkit' 
    //   }
    // }
  ]

 
});
