# Test [LivingStyleGuide](https://github.com/livingstyleguide/livingstyleguide)

Test LivingStyleGuide throwing errors on Compass image helpers.

## Quick Start

```
bundle
npm install
bower install
grunt build
```

If you have [http-server](https://github.com/indexzero/http-server) installed, you can boot up a quick server with:

```
http-server app/webroot/
```

## LivingStyleGuide Errors

`grunt compass` and `compass compile` run correctly, but when I try...

```
livingstyleguide compile assets/scss/styleguide.lsg app/webroot/styleguide.html
```

I get the following error:

```
WARNING: 'test.png' was not found (or cannot be read) in ./images
/Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/compass-core-1.0.3/lib/compass/core/sass_extensions/functions/image_size.rb:31:in `initialize': No such file or directory @ rb_sysopen - ./images/test.png (Errno::ENOENT)
    from /Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/compass-core-1.0.3/lib/compass/core/sass_extensions/functions/image_size.rb:31:in `open'
    from /Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/compass-core-1.0.3/lib/compass/core/sass_extensions/functions/image_size.rb:31:in `get_size_for_png'
    from /Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/compass-core-1.0.3/lib/compass/core/sass_extensions/functions/image_size.rb:26:in `size'
    from /Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/compass-core-1.0.3/lib/compass/core/sass_extensions/functions/image_size.rb:54:in `image_dimensions'
    from /Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/compass-core-1.0.3/lib/compass/core/sass_extensions/functions/image_size.rb:6:in `image_width'
    from /Users/tannerhodges/.rbenv/versions/2.2.2/lib/ruby/gems/2.2.0/gems/sass-3.4.16/lib/sass/script/tree/funcall.rb:140:in `_perform'
...
```

[See the discussion on GitHub](https://github.com/livingstyleguide/livingstyleguide/issues/49#issuecomment-131847204)

**Note**: You may need to run `compass compile --force` for Compass to run if you haven't made any changes to the stylesheets.

## Stack

- Mac OS X 10.10.5
- rbenv 0.4.0
- ruby 2.2.2p95 (2015-04-13 revision 50295) [x86_64-darwin14]
- Sass 3.4.16 (Selective Steve)
- Compass 1.0.3 (Polaris)
