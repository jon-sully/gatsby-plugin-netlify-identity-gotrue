# gatsby-plugin-netlify-identity-gotrue

### See the demo! ✨ https://gatsby-identity-demo.jonsully.net ✨

 _See the demo code 🤖 [here](https://github.com/jon-sully/gatsby-plugin-netlify-identity-gotrue-demo)! 🤖_

---

A simple Gatsby plugin for enabling a comprehensive and fully-featured Netlify Identity implementation into your Gatsby site. This plugin is a simplistic wrapper around [`react-netlify-identity-gotrue`][2]. See that repository for the full API documentation available within Gatsby.

### Install

```sh
npm i gatsby-plugin-netlify-identity-gotrue
# or
yarn add gatsby-plugin-netlify-identity-gotrue
```

Then, in `gatsby-config.js`, add an entry to `plugins`:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-identity-gotrue`,
      options: {
        url: `https://your-unique-site.netlify.app` // ❗REQUIRED❗
        // Do _not_ include any path (/.netlify/identity, etc.) and
        // leave the trailing slash off.
      }
    }
  ]
}
```

❗**PLEASE NOTE** - This plugin will fail if Netlify Identity isn't enabled for your live Netlify site. Local development uses the same Netlify Identity instance as your live / 'prod' site.

### Usage

Once you've installed the plugin into your Gatsby site and added the plugin options to your `gatsby-config.js` file, you can pull in the `useIdentityContext` hook _anywhere_ in your site. Just add `import { useIdentityContext } from 'react-netlify-identity-gotrue'` to your file's import statements (NOTE: this plugin pulls in `react-netlify-identity-gotrue` so the import should work just fine and you don't need to manually install `react-netlify-identity-gotrue`) then anywhere you need it, call the hook: `const identity = useIdentityContext()`

In context, this looks like:

```js
// my-account.js
import React from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

export default () => {
  const identity = useIdentityContext()
  
  return {
    identity.user
      ? <p>Welcome to your account, {identity.user.email}</p>
      : <p>Please log in</p>
  }
}

```

To learn more about the `identity` object and the full API available to you when using this plugin, please see [`react-netlify-identity-gotrue`][2]. 

To see a fully working, implemented demo using this plugin (for ideas or in-context references), please see [`gatsby-plugin-netlify-identity-gotrue-demo`][6]


---

#### Note ❗

**This repository, the underlying [`react-netlify-identity-gotrue`][2] repository, and the  [`gatsby-plugin-netlify-identity-gotrue-demo`][6] repository that consumes this one are _not_ related to Netlify's [`netlify-identity-widget`][3] stack _or_ @sw-yx's [`react-netlify-identity`][4] stack, both of which ultimately sit on [`gotrue-js`][5]. *This* stack is written in pure React and interfaces with Netlify Identity directly without any dependencies. You can read some history about the three stacks here: https://jonsully.net/blog/announcing-react-netlify-identity-gotrue.**

[2]:https://github.com/jon-sully/react-netlify-identity-gotrue
[3]:https://github.com/netlify/netlify-identity-widget
[4]:https://github.com/netlify-labs/react-netlify-identity
[5]:https://github.com/netlify/gotrue-js
[1]: https://github.com/jon-sully/gatsby-plugin-netlify-identity-gotrue
[6]: https://github.com/jon-sully/gatsby-plugin-netlify-identity-gotrue-demo
