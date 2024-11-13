import { FC } from 'react';
import { RodProps } from './type/interface';
import Bead from './Bead';

const Rod: FC<RodProps> = ({
	skin,
	beadsPerRodTop,
	beadsPerRodBottom,
	beadSkin,
}) => {
	return (
		<div className={`rod ${skin}`}>
			<div className='top'>
				{Array.from({ length: beadsPerRodTop }).map((_, index) => (
					<Bead key={index} skin={beadSkin} />
				))}
			</div>
			<div className='bottom'>
				{Array.from({ length: beadsPerRodBottom }).map((_, index) => (
					<Bead key={index} skin={beadSkin} />
				))}
			</div>
		</div>
	);
};

export default Rod;
