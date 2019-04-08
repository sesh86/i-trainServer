const googleTrends = require('google-trends-api');
res=[]
let promise = new Promise(function(resolve, reject) {
  urls=['angular','angular6']
  urls.forEach(function(url,index){
    console.log(index)
  googleTrends.relatedQueries({keyword: url})
  .then(function(results){
    results=JSON.parse(results)
    k=results.default.rankedList[0].rankedKeyword;
    var keywords=[];for(i in k) keywords.push(k[i].query)
    res.push(keywords);
    if(index==urls.length-1) resolve(res)
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  })
})
});

// resolve runs the first function in .then
promise.then(
  result => console.log(res), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);
