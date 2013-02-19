# browser-badge

Generate browser version compatibility badges.

# example

With a json file like this:

``` json
{
  "explorer" : { "7.0" : false, "8.0" : false, "9.0" : false },
  "firefox" : { "10.0" : true, "11.0" : true, "12.0" : false, "13.0" : true, "nightly" : true },
  "chrome" : { "14.0" : true, "15.0" : true, "16.0" : true, "canary" : true },
  "safari" : { "5.0.5" : false, "5.1.0" : false, "5.1.1" : true },
  "opera" : { "10.6" : false, "11.0" : false, "11.6" : false }
}
```

![badge](http://substack.net/images/badge.png)

# usage

Browser only version adapted from the browser-badge module at https://github.com/substack/browser-badge. 

# methods

``` html
<script src="badgeConfig.js"></script>
<script src="browserBadge.js"></script>
<script>
BrowserBadge.buildBadge(browsers);
</script>

```

# license

MIT
