# gatsby-plugin-netlify-identity-gotrue

### See it in action! ✨ https://gatsby-id-demo.jonsully.net ✨

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
        url: `https://your-unique-site.netlify.app/` // ❗REQUIRED❗
      }
    }
  ]
}
```

❗**PLEASE NOTE** - This plugin will fail if Netlify Identity isn't enabled for your live Netlify site. Local development uses the same Netlify Identity instance as your live / 'prod' site.


---

#### Note ❗

**This repository, the consuming [`gatsby-plugin-netlify-identity-gotrue-demo`][6] repository, and the underlying [`react-netlify-identity-gotrue`][2] repository are _not_ related to Netlify's [`netlify-identity-widget`][3] stack _or_ @sw-yx's [`react-netlify-identity`][4] stack, both of which ultimately sit on [`gotrue-js`][5]. *This* stack is written in pure React and interfaces with Netlify Identity directly without any dependencies. You can read some history about the three stacks here: https://jonsully.net/blog/announcing-react-netlify-identity-gotrue.**

[2]:https://github.com/jon-sully/react-netlify-identity-gotrue
[3]:https://github.com/netlify/netlify-identity-widget
[4]:https://github.com/netlify-labs/react-netlify-identity
[5]:https://github.com/netlify/gotrue-js
[1]: https://github.com/jon-sully/gatsby-plugin-netlify-identity-gotrue
[6]: https://github.com/jon-sully/gatsby-plugin-netlify-identity-gotrue-demo