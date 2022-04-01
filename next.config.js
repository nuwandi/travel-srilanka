/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'dynamic-media-cdn.tripadvisor.com',
      'media-cdn.tripadvisor.com',
      'media.istockphoto.com',
      'www.streamlanka.com',
      'www.monsrilanka.com',
      'www.viinz.com',
      'capitalwindkalpitiya.com',
      'upload.wikimedia.org',
      'cdn-imgix.headout.com',
      'images.squarespace-cdn.com'

    ],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibnV3YW5kaSIsImEiOiJjbDFkbG14bmQwMHoxM2ptcXJ5M2J4enljIn0.B3mzRYjRRSRddA9aytiRvg'
  }
}
