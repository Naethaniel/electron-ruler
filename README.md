## Electron ruler

App made with electron and react. Single window which shows ruler with 5 px step. <br/>
Based on electron-react boilerplate: <br/>https://github.com/electron-react-boilerplate/electron-react-boilerplate
Shortcuts:

  * Command + Shift + R -> rotate window 

## Install


First, clone the repo via git:

```bash
git clone https://github.com/Naethaniel/electron-ruler.git
```

And then install the dependencies with yarn.

```bash
$ cd electron-ruler
$ yarn
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to the [Multi Platform Build docs](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package --[option]
```

## License

MIT
