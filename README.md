# Levels Comment Extension

Works for Chrome, Opera, Edge & Firefox.

## Features

>- ___Write in your favorite framework - React and Typescript! :)___
>  
>   Now you can create part of your extensions in React framework - as you wish ;)
>
>- ___Write once and deploy to Chrome, Opera, Edge & Firefox___
>
>   Based on WebExtensions. It also includes a tiny polyfill to bring uniformity
> to the APIs exposed by different browsers.
>
>- ___Live-reload___
>
>   Your changes to CSS, HTML & JS files will be relayed instantly without having
>   to manually reload the extension. This ends up saving a lot of time and
>   improving the developer experience. Based on <https://github.com/xpl/crx-hotreload>
>
>- ___Comfortable styles import___
>
>   With react you can load styles directly and you can use scss for styling.
>
>- ___Easily configurable and extendable___
>
>   Project use webpack so you can easily customize your project depends on your needs.
>  In config.json you can define source path for each browser
>  (if needed - default it's the same source), destination and develop directory.

## Run & Installation

>### Run & Build
>
>> 1. Clone the repository `git clone https://github.com/sorza-jimmy/levels-chrome-extension.git`
>> 2. Run `npm install` or `yarn install`
>> 3. Run `npm run build` or `yarn build`
>>
>> Note: You can [download](https://github.com/sorza-jimmy/levels-chrome-extension/releases/latest) build file
>
>### Load the extension in Chrome & Opera
>
>> 1. Open Chrome/Opera browser and navigate to chrome://extensions
>> 2. Select "Developer Mode" and then click "Load unpacked extension..."
>> 3. From the file browser, choose to `./dev/chrome`
>> or > (`./dev/opera`)
>
>### Load the extension in Firefox
>
>>1. Open Firefox browser and navigate to about:debugging
>>2. Click "Load Temporary Add-on" and from the file browser, choose >>`./dev/firefox`
>
>### Load the extension in Edge
>
>><https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/>adding-and-removing-extensions>

## Developing

>The following tasks can be used when you want to start developing the extension
>and want to enable live reload -
>`npm run watch` or `yarn watch`

## Packaging

>Run `npm run build` or `yarn build` to create a zipped in `dist` Folder,
production-ready extension for each browser.
