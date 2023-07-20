const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Nikesh Shrestha',
    site_url: 'https://nikeshshrestha.me',
    feed_url: 'https://nikeshshrestha.me/feed.xml'
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
