var request = require('superagent-es6-promise');

var apiURLs = ["https://extraction.import.io/query/extractor/9fe09a64-bf12-4f8e-8738-26b08fac992b?_apikey=ec60cbd9df2e415096febae644cc6c1d443c3f192dc8f1e0a223e61d83eca2cddc9d6da176236fc163e3c913ecd0e6d4cb8a5cf33dc1040d839e4c9a709af2b1723fa70d2151ee1bc7441a9b5cdc18f8&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fforhire%2Fsearch%3Fq%3D%255Bhiring%255D%2Breact%26restrict_sr%3Don%26sort%3Dnew%26t%3Dall",
"https://extraction.import.io/query/extractor/16d7107e-18d8-4ba2-bcee-f04e369f702a?_apikey=ec60cbd9df2e415096febae644cc6c1d443c3f192dc8f1e0a223e61d83eca2cddc9d6da176236fc163e3c913ecd0e6d4cb8a5cf33dc1040d839e4c9a709af2b1723fa70d2151ee1bc7441a9b5cdc18f8&url=https%3A%2F%2Fwww.upwork.com%2Fo%2Fjobs%2Fbrowse%2F%3Fq%3Dreact",
"https://extraction.import.io/query/extractor/3168a8c8-43e8-4479-a9f3-8c3e2c6e98c9?_apikey=ec60cbd9df2e415096febae644cc6c1d443c3f192dc8f1e0a223e61d83eca2cddc9d6da176236fc163e3c913ecd0e6d4cb8a5cf33dc1040d839e4c9a709af2b1723fa70d2151ee1bc7441a9b5cdc18f8&url=https%3A%2F%2Fwww.indeed.co.uk%2Fjobs%3Fq%3Dreact%26jt%3Dcontract%26radius%3D25%26sort%3Ddate"]

var apiData = [];
for (var i = 0; i < apiURLs.length; i++) {
    var url = apiURLs[i];
    function apiCall () {
        request.get(url)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    apiData.push(apiCall());
}
