<script>
  $('a').each(function(i, a) {
    if (a.href.indexOf('?') === -1) a.href = a.href + "?" + $.param(getUrlVars())
    if (a.href.indexOf('?') >= 0) a.href = a.href + "&" + $.param(getUrlVars())
  })
</script>