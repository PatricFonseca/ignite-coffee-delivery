import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./contexts/CartContext";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { SuccessPage } from "./pages/SuccessPage";
import {
	Route,
	Link,
	useParams,
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/cart",
		element: <Checkout />,
	},
	{
		path: "/success",
		element: <SuccessPage />,
	},
]);

function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<CartContextProvider>
					<RouterProvider router={router} />

					{/* <Checkout /> */}
					{/* <Home /> */}
					{/* <SuccessPage /> */}
				</CartContextProvider>
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
