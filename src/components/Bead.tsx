import { FC } from 'react';
import { BeadProps } from './type/interface';

const Bead: FC<BeadProps> = ({ skin }) => {
	return <div className={`bead ${skin}`}></div>;
};

export default Bead;
