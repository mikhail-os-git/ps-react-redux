import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { UserContextProvider } from "../../context/UserContext/user.context";
import styles from './LoginLayout.module.css';

export function LoginLayout() {
	return (
		<div className={styles["layout-login"]}>
		<UserContextProvider>
				<Header/>
				<div className={styles["content"]}>
						<Outlet/>
				</div>
			</UserContextProvider>
	</div>
	)
}