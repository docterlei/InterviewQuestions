/**
var arr = [ {id: 1024, name: '小熊'},
  {id: 1021, name: '小熊'},
  {id: 1022, name: '小马'},
  {id: 1023, name: '小猪'},
  {id: 1024, name: '小雷'},
  {id: 1025, name: '小海'},
  {id: 1021, name: '小芳'}
]
*/

function arrayReduce() {
  var obj = {}
  return arr.reduce((prev, cur) => {
   obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur)
   return prev
  }, [])
}
