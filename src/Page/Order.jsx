import { Box, Container, Grid } from "@mui/material";
import { OrderBox } from "../Components/OrderBox";

export const Order = () => {
	const orderContainer = [
		{ name: "Даваа" },
		{ name: "Мягмар" },
		{ name: "Лхагва" },
		{ name: "Пүрэв" },
		{ name: "Баасан" },
		{ name: "Бямба" },
		{ name: "Ням" },
	];
	return (
		<Grid  
            width="fitcontent" 
            flexDirection="column"
            marginLeft="300px"
            container 
        >
			<Grid item display="flex">
				{orderContainer.map((el) => (
						<Grid>
							<OrderBox name={el.name} />
						</Grid>
					))}
			</Grid>
		</Grid>
	);
};
