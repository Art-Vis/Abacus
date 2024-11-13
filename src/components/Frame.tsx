import { FC } from 'react';
import { FrameProps } from './type/interface';

const Frame: FC<FrameProps> = ({ children }) => {
	return <div className='frame'>{children}</div>;
};

export default Frame;
