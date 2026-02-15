window.addEventListener('IGImagesDownloader_get_params', function () {
  var t = window.fb_dtsg || ''
  var n = new CustomEvent('IGImagesDownloader_get_params_result', {
    detail: { dtsg: t },
  })
  window.dispatchEvent(n)
})
