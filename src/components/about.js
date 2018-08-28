const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <div
      id="about"
      class="psa l20 w80 tv25 try75 bg-lg fc-black hv100 pl4"
      portrait="p0 l0 b0 w100 tmobile trymobile ha pt0-6"
      small="l30 w70"
    >
      <div
        class="h100 w100 os"
      >
        <ul
          class="fwb m0 hv25 x xdc xjc fs0-8 fwn lh2 lsn p0"
          portrait="fs0-8 lh1-6 ha pl2 pb1"
          short="fs0-8 lh1-2"
        >
          <li class="curd">Developer + Designer</li>
          <a class="tdn fc-black" target="__blank"
      rel="noopener noreferrer" href="http://1.bp.blogspot.com/-u_TD-Zwn23E/T8995hFjTuI/AAAAAAAADyI/rFZ__OCb7KE/s1600/Manhattan+New+York+City+4.jpg">New York City</a>
          <a class="tdn fc-black" target="__blank"
      rel="noopener noreferrer" href="https://1stdibs.com">Front End Engineer @ 1stdibs</a>
        </ul>
      </div>
    </div>
  `
}
