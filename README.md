# Botson

> A chrome extension to detect bots in your twitter newsfeed.

[Install on Chrome]().

## Why bot detection?

Researchers have estimated that 15%, around 48 million, of twitter accounts are bots. While bots are often harmless and can bring joy to us, there are many bots that are unfortunately used maliciously, such as spreading false information, [which can have negative real life consequences](https://www.washingtonpost.com/local/pizzagate-from-rumor-to-hashtag-to-gunfire-in-dc/2016/12/06/4c7def50-bbd4-11e6-94ac-3d324840106c_story.html). Trump, reportedly, has [15 million fake followers that actively contribute to delegitimizing the media](http://www.newsweek.com/donald-trump-twitter-bots-fake-followers-trolls-army-white-house-propaganda-621018) by perpetuating his blatantly false claims. Now, more than ever in our history, we must be ruthless in discerning the legitimacy of our information. This chrome extension is one step towards a future where bipartisan beliefs and values can co-exist supported by constructive dialogue based on a single reality.

## How does it work?

Thanks to the [tremendous efforts of researchers from the Indiana University and University of Southern California](https://arxiv.org/pdf/1703.03107.pdf), there is an amazing body of work around analyzing a myriad of signals (e.g. tweet content and sentiment, network patterns, activity time series) to train highly-accurate models to identify bots.

On top of that, they’ve even built a wonderful API, [Botometer](https://botometer.iuni.iu.edu/#!/), which accepts a twitter account, its most recent tweets and mentions, and returns a set of scores. Learn more about their [API documentation](https://market.mashape.com/OSoMe/botometer).

Note that bot detection is a difficult task. For example, the current API often categorizes “organizational accounts,” like [@BarackObama](https://twitter.com/barackobama), as bot accounts. They are also working on improving the API and their training models to better classify bots. To learn more about interpreting the bot score, [see Botometer’s FAQ](https://botometer.iuni.iu.edu/#!/faq).

## How do I use it?

Once you’ve installed the extension, click on the icon so that you can authenticate your Twitter account and provide read-only access. The extension requires it for Twitter’s API rate limiting purposes.

Then, when you’re on Twitter’s website, tweets from accounts that have received a “bot” high score will be blurred and covered with information about that account.

![We are 87% confident that this tweet is from a bot.](http://i.imgur.com/Z96Uvua.png)

You can choose to reveal the tweet if you’d like.

If you click on the extension icon again, there are some simple metrics about the number of accounts scored.

## Contribute

The code base is open sourced here. If you have feature requests or ideas, [please feel free to create an issue](https://github.com/lambtron/botbusters-extension/issues).

## License

MIT License

Copyright (c) 2017 Andy Jiang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
