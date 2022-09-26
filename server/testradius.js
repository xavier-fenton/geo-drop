function CalculateDistance(lat1, long1, lat2, long2) {
  // Translate to a distance
  var distance =
    Math.sin(lat1 * Math.PI) * Math.sin(lat2 * Math.PI) +
    Math.cos(lat1 * Math.PI) *
      Math.cos(lat2 * Math.PI) *
      Math.cos(Math.abs(long1 - long2) * Math.PI)

  console.log(distance)
  return Math.acos(distance) * 6370981.162
} // CalculateDistance

// The target longitude and latitude
var targetlong = 174.748574
var targetlat = -36.870118

// Call this on an interval
function OnInterval() {
  // Get the coordinates they are at
  // home
  const lat = -36.869338
  const long = 174.747368

  var distance = CalculateDistance(targetlat, targetlong, lat, long)
  var newDistance = distance / 100
  console.log(newDistance)

  // Is it in the right distance? (200m)
  if (newDistance <= 200) {
    return console.log('within range')
  }
}

OnInterval()

// function trueMessage(input, db = connection) {
//   return db('messages')
//     .whereBetween('lat', [lat - r, lat + r])
//     .whereBetween('long', [long - r, long + r])
//     .select('msg', 'id', 'name')
// }
