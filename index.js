var bind = Function.prototype.bind

/**
 * `requestAnimationFrame()`
 */

var request = this.requestAnimationFrame
  || this.webkitRequestAnimationFrame
  || this.mozRequestAnimationFrame
  || fallback

var prev = +new Date
function fallback (fn) {
  var curr = +new Date
  var ms = Math.max(0, 16 - (curr - prev))
  var req = setTimeout(fn, ms)
  return prev = curr, req
}

/**
 * `cancelAnimationFrame()`
 */

var cancel = this.cancelAnimationFrame
  || this.webkitCancelAnimationFrame
  || this.mozCancelAnimationFrame
  || clearTimeout

if (bind) {
  request = bind.call(request, this)
  cancel = bind.call(cancel, this)
}

exports = module.exports = request
exports.cancel = cancel
