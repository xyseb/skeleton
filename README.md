# Skeleton project
## https://github.com/xyseb/skeleton/blob/main/README.md
skeletons to be used as basic template through degit (https://www.npmjs.com/package/degit?activeTab=readme).


# Reminder:
```
degit user/repo#dev       # branch
degit user/repo#v1.2.3    # release tag
degit user/repo#1234abcd  # commit hash
```

# Scratch command example with powershell:
## Initial setup to do:
Create a folder on desktop if you not already have one:
- `$desk=[Environment]::GetFolderPath("Desktop"); New-Item -Path $desk\TestsFormationWeb -Type Directory;`
## Command to create a new test project:

- `$target= 'html-css-javascript-web'; $desk=[Environment]::GetFolderPath("Desktop"); $proj = Read-Host -Prompt "What's your project folder name?"; New-Item -Path $desk\TestsFormationWeb\$proj -Type Directory; cd $desk\$proj; npx degit https://github.com/xyseb/skeleton#$target; code $desk\$proj`

# HTML BRANCHES:
## html
`npx degit https://github.com/xyseb/skeleton#html`
## html-css
`npx degit https://github.com/xyseb/skeleton#html-css`
## html-css-javascript
`npx degit https://github.com/xyseb/skeleton#html-css-javascript`
## html-css-javascript-web
`npx degit https://github.com/xyseb/skeleton#html-css-javascript-web`
## html-form-example
`npx degit https://github.com/xyseb/skeleton#html-form-example`
## html-form-example-css-reset
`npx degit https://github.com/xyseb/skeleton#html-form-example-css-reset`
## node
`npx degit https://github.com/xyseb/skeleton#node`
## typescript
`npx degit https://github.com/xyseb/skeleton#typescript`
## typescript-web
`npx degit https://github.com/xyseb/skeleton#typescript-web`

-----

# REACT BRANCHES:
## create-react-app
`npx degit https://github.com/xyseb/skeleton#create-react-app`
## create-react-app-sass
`npx degit https://github.com/xyseb/skeleton#create-react-app-sass`
## create-react-app-pwa
`npx degit https://github.com/xyseb/skeleton#create-react-app-pwa`
## create-react-app-pwa-sass
`npx degit https://github.com/xyseb/skeleton#create-react-app-pwa-sass`
## create-react-app-ts
`npx degit https://github.com/xyseb/skeleton#create-react-app-ts`
## create-react-app-ts-sass
`npx degit https://github.com/xyseb/skeleton#create-react-app-ts-sass`
## create-react-app-pwa-ts
`npx degit https://github.com/xyseb/skeleton#create-react-app-pwa-ts`
## create-react-app-pwa-ts-sass
`npx degit https://github.com/xyseb/skeleton#create-react-app-pwa-ts-sass`

## vite-react
`npx degit https://github.com/xyseb/skeleton#vite-react`
## vite-react-pwa
`npx degit https://github.com/xyseb/skeleton#vite-react-pwa`
## vite-react-pwa-sass
`npx degit https://github.com/xyseb/skeleton#vite-react-pwa-sass`
## vite-react-pwa-ts
`npx degit https://github.com/xyseb/skeleton#vite-react-pwa-ts`
## vite-react-pwa-ts-sass
`npx degit https://github.com/xyseb/skeleton#vite-react-pwa-ts-sass`
## vite-react-pwa-ts-swc
`npx degit https://github.com/xyseb/skeleton#vite-react-pwa-ts-swc`
## vite-react-pwa-ts-swc-sass
`npx degit https://github.com/xyseb/skeleton#vite-react-pwa-ts-swc-sass`
## vite-react-sass
`npx degit https://github.com/xyseb/skeleton#vite-react-sass`
## vite-react-swc
`npx degit https://github.com/xyseb/skeleton#vite-react-swc`


## vite-react-ts
`npx degit https://github.com/xyseb/skeleton#vite-react-ts`
## vite-react-ts-sass
`npx degit https://github.com/xyseb/skeleton#vite-react-ts-sass`
## vite-react-ts-swc
`npx degit https://github.com/xyseb/skeleton#vite-react-ts-swc`
## vite-react-ts-swc-sass
`npx degit https://github.com/xyseb/skeleton#vite-react-ts-swc-sass`
