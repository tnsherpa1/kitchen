import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* .layout-wrapper{
		padding-top: 3.25em;

		&.is-transitioning {
			opacity: 0;
		}

		> * {
			margin: 0 auto;
			max-width: _size(inner);
			width: calc(100% - 6em);

			@include breakpoint(small) {
				@include padding(3em, 0);
				width: calc(100% - 2em);
			}
		}

		> * > * {
			@include inner;
		}

		@include breakpoint(small) {
			padding-top: 2.75em;
		}
  } */
`;
