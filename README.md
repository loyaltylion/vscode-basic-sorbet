# vscode-simple-sorbet

**important:** you must install [Watchman](https://facebook.github.io/watchman/docs/install.html) for this to work

---

a basic vscode extension to hook into [Sorbet's](https://github.com/sorbet/sorbet) language server while we wait for [Stripe to release their extension](https://twitter.com/darkdimius/status/1141785271958167553)

most of the Sorbet LSP features are work-in-progress, but diagnostics are working (on save) which is very helpful

diagnostics are confirmed working in sorbet version `0.4.4358`

<img src='https://d.pr/i/ncAtQb.gif' width='500'>

## how to use

- install the [Sorbet gem](https://rubygems.org/gems/sorbet), most likely it'll need to be locally
- install [Watchman](https://facebook.github.io/watchman/docs/install.html)
