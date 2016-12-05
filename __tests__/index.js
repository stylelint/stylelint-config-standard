import config from "../"
import stylelint from "stylelint"

const validCss = (
`@import url(x.css);
@import url(y.css);

/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: '→';
    background-image: url(x.svg);
  }
}

`)

const invalidCss = (
`a {
  top: .2em;
}

`)

describe("flags no warnings with valid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config: config,
    })
  })

  it("did not error", () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  })

  it("flags no warnings", () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  })
})

describe("flags warnings with invalid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config: config,
    })
  })

  it("did error", () => {
    return result.then(data => (
      expect(data.errored).toBeTruthy()
    ))
  })

  it("flags one warning", () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(1)
    ))
  })

  it("correct warning text", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].text).toBe("Expected a leading zero (number-leading-zero)")
    ))
  })

  it("correct rule flagged", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].rule).toBe("number-leading-zero")
    ))
  })

  it("correct severity flagged", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].severity).toBe("error")
    ))
  })

  it("correct line number", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].line).toBe(2)
    ))
  })

  it("correct column number", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].column).toBe(8)
    ))
  })
})
