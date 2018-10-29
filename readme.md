# React-Native Boilderplate
This boilerplate launches React Native app with redux, Redux-Saga and React-Native-Navigation, this boilerplate is super helpful to kick-start your next project.
## tools
* [React-Native](https://github.com/facebook/react-native)
* [Redux](https://github.com/reactjs/redux)
* [Redux-Saga](https://github.com/redux-saga/redux-saga)
* [React-Native-Navigation](https://github.com/wix/react-native-navigation)
* [ImmutableJS](https://facebook.github.io/immutable-js/)
* [Redux-immutable](https://github.com/gajus/redux-immutable)
* [Custom Font(Open-Sans)](https://fonts.google.com/specimen/Open+Sans)
* [apisauce](https://github.com/infinitered/apisauce)

## Tips about tools
* [More information about redux and immutable](https://redux.js.org/recipes/usingimmutablejs)
* [babel-plugin-module-resolver for alias imports](https://www.npmjs.com/package/babel-plugin-module-resolver)

Getting Started
1. Clone and install
```
git clone
cd to project
react-native upgrade
npm install
react-native link
```

2. Run
```
react-native run ios
react-native run android
```

## Tips
* if you want to change custom fonts use [this](https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4)
* if you want to change project name use [this](https://www.npmjs.com/package/react-native-rename)
* if you have :CFBundleIdentifier", Does Not Exist error use this routine
```
This is may occurs if you are missing config.h file,

For update config.h file,

1) Close your Xcode.

2) Open Terminal, go to your project's root folder and do:

cd node_modules/react-native/third-party/glog-{X}.{X}.{X}/
3) Run the configure script:

./configure
4) Open Xcode and try to run your app.

{X}: version number glog
```
##### you can custom your theme in theme.js file

License
-----------

Copyright (c) 2018 Milad Heydari
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.



