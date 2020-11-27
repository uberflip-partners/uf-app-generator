                        __                ___ __ __
                 .--.--|  |--.-----.----.'  _|  |__.-----.
                 |  |  |  _  |  -__|   _|   _|  |  |  _  |
                 |_____|_____|_____|__| |__| |__|__|   __|
                                                   |__|
                                                             __
    .---.-.-----.-----.  .-----.-----.-----.-----.----.---.-|  |_.-----.----.
    |  _  |  _  |  _  |  |  _  |  -__|     |  -__|   _|  _  |   _|  _  |   _|
    |___._|   __|   __|  |___  |_____|__|__|_____|__| |___._|____|_____|__|
          |__|  |__|     |_____|

### Installing

Using npm:
```
$ npm i uf-app-generator
```

### Commands

### `buildDir`

This command generates a folder structure and auto-populates this directory with:
- Sample `manifest.json` with examples of every input available in the Marketplace
- `Scripts Directory` that contains a `.JS` file to drop each Hub code version
- `Image Directory` to store all assets

```
$ buildDir

$ Enter App Name?
$ >test-App

$ 'test-App' app directory created!
$ Manifest populated...
$ Script files populated...
```

#### `buildDir` File Structure

The following file structure will be generated in your local directory from the `buildDir` command.

```
.
├── manifest.json
├── images
│   ├── assets
├── scripts
│   ├── themesCheck.js
```

### `pushDir`

This command looks for local changes in current directory and seamlessly pushes changes to the Marketplace app.

```
$ Enter marketplace app ID
$ >123456

$ App Version
$ >v1

$ -- APP CONFIG --
$ ID:      123456
$ Version: v1

$ Looking for changes:  /Users/friisl/Documents/uf-app-generator-test
$ Changes pushed!
```

### `--uf-version`

Outputs current version of `uf-app-generator` package.

### `--uf-help`

Outputs detailed information about available [commands](#commands) and developer contact information.
