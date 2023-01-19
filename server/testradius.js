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
var targetlong = 174.776694
var targetlat = -36.865277



// Call this on an interval
function OnInterval() {
  // Get the coordinates they are at
  // home

  const lat = -36.8644371
  const long = 174.776396

  var distance = CalculateDistance(targetlat, targetlong, lat, long)
  var newDistance = distance / 100
  console.log(newDistance)

  // Is it in the right distance? (200m)
  if (newDistance <= 200) {
    return console.log('within range')
  }
}

OnInterval()

