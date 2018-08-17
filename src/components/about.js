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
          class="m0 hv25 x xdc xjc fs1-2 fwn lh2 lsn p0"
          portrait="fs1 lh1-6 ha pl2 pb1 pt1"
          short="fs0-8 lh1-2 pb1 pt1"
        >
          <li>Programmer</li>
          <li>Brother</li>
          <li>Son</li>
        </ul>
        <ul
          class="m0 hv25 x xdc xjc fs1 fwn lh2 lsn p0"
          portrait="fs0-8 lh1-6 ha pl2 pb1"
          short="fs0-8 lh1-2"
        >
          <li>New York City</li>
          <li>Front End Engineer @ 1stdibs</li>
        </ul>
      </div>
    </div>
  `
}
