#HTTP Dump

Dump everything about the HTTP request (and may be some more)

Hosted at Heroku and ready to use, give it a try

[http://httpdump.herokuapp.com/](http://httpdump.herokuapp.com/)
[http://httpdump.herokuapp.com/tell/me/more](http://httpdump.herokuapp.com/tell/me/more)
[http://httpdump.herokuapp.com/ask?q=what](http://httpdump.herokuapp.com/ask?q=what)

Using curl

```
curl -s -X POST --data 'some data' -H 'Random-Header: blah' http://httpdump.herokuapp.com/random/url
```

The server responds with JSON that looks something like this

[![example response](http://f.cl.ly/items/0M3x393C1D0Q2K0F1a0t/http_dump_response.png)](http://cl.ly/image/2s3E3D0O2p3G)


## Contributing
Fork this repo, make a change and send a pull request

## License
[MIT license](http://opensource.org/licenses/MIT)
