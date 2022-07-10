import React from 'react'
import { useShop } from '../../context/uiContext';
import { Drawer } from "./drawer"



const ManagedDrawer: React.FC<any> = ({children}) => {
	
	const styles = {
		right: 0,
	}

	const { displaySidebar,closeSidebar } = useShop()

	return (
		<Drawer
			placement={"right"}
			open={displaySidebar}
			handler={false}
			showMask={true}
			level={null}
			width={340}
			onClose={closeSidebar}
			duration="0.5s"
			contentWrapperStyle={styles}

		>
			
			{children}
		</Drawer>
	);
};

export default ManagedDrawer;
