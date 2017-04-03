import request from 'superagent-es6-promise'
import initalize from './initializeFirebase'

initalize()

/* eslint-disable */
const apiURLs = ['https://extraction.import.io/query/extractor/95f6d381-2e7f-4238-affc-0ffd1fea1381?_apikey=11baff8f0228467699c5206895d888dc53f60d97425b95469c591449ca1941871e9fb8396574c617e6ec36e457f8c0e17cc41df53feb67d54e608105c65f820f8b1415a2bde0e6cdb22ff6b1e4d744eb&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fforhire%2Fsearch%3Fq%3D%255Bhiring%255D%2Breact%26restrict_sr%3Don%26sort%3Dnew%26t%3Dall']
/* eslint-enable */

apiURLs.forEach((url) => {
  request.get(url)
            .then((res) => {
              console.log(res)
            })
            .catch((error) => {
              console.log(error)
            })
},

)
