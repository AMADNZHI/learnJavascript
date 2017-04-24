for (var i = 0; i < 10; i++) {
  function counter(i) {
    setTimeout(function() {
        console.log(i)
    }, 10000)
  }
  counter(i);
}