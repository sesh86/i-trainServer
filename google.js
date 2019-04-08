const googleTrends = require('google-trends-api');

googleTrends.relatedQueries({keyword: 'seshachalam srinivasan'})
.then(function(results){
  results=JSON.parse(results)
  console.log(results)
  var keywords=[];
  for(i in results.default.rankedList)
    {
    k=results.default.rankedList[i].rankedKeyword;
    for(i in k) keywords.push(k[i].query)
    }

  console.log('These results are awesome', keywords.join(', '));
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});
