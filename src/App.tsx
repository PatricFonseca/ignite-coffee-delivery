import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./contexts/CartContext";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { SuccessPage } from "./pages/SuccessPage";

function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<CartContextProvider>
					<Checkout />
					{/* <Home /> */}
					{/* <SuccessPage /> */}
				</CartContextProvider>
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
