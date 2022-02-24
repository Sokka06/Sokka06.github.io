import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools";

const dark = 'linear-gradient(38deg, #171923 0%, #1A202C 46%, #171923 100%)';
const light = "#f0f0f0";

const theme = {
	config: {
		useSystemColorMode: false,
		initialColorMode: "dark"
	  },
	  styles: {
		global: (props) => ({
			html: {
			},
		  body: {
			bg: mode(light, dark)(props),
			bgRepeat: 'no-repeat',
			bgAttachment: 'fixed',
		  }
		})
	  }
	/* colors: {
    	background: "rebeccapurple",
  	}, */
}

export default extendTheme(theme)