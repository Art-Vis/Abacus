import { FC, useState } from 'react';
import Frame from './Frame';
import Rod from './Rod';

const beadSkins = ['default-bead-skin', 'izumrude-bead-skin'];
const frameSkins = ['default-frame-skin', 'metal-frame-skin'];

const Abacus: FC = () => {
	const [beadSkin, setBeadSkin] = useState<string>(beadSkins[0]);
	const [frameSkin, setFrameSkin] = useState<string>(frameSkins[0]);
	const [rodCount, setRodCount] = useState<number>(5);
	const [beadsPerRodTop, setBeadsPerRodTop] = useState<number>(2);
	const [beadsPerRodBottom, setBeadsPerRodBottom] = useState<number>(5);

	const settingsAbacus = {
		rodMin: 1,
		rodMax: 20,
		beadsBottomMin: 2,
		beadsBottomMax: 9,
		beadsTopMin: 1,
		beadsTopMax: 4,
	};

	const handleRodCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = Number(e.target.value);
		if (value < settingsAbacus.rodMin) {
			value = settingsAbacus.rodMin;
		}
		if (value > settingsAbacus.rodMax) {
			value = settingsAbacus.rodMax;
		}
		setRodCount(value);
	};

	const handleBeadsPerRodTopChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let value = Number(e.target.value);
		// Исправлено: проверка верхнего лимита для верхних косточек
		if (value < settingsAbacus.beadsTopMin) {
			value = settingsAbacus.beadsTopMin;
		}
		if (value > settingsAbacus.beadsTopMax) {
			value = settingsAbacus.beadsTopMax;
		}
		setBeadsPerRodTop(value);
	};

	const handleBeadsPerRodBottomChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let value = Number(e.target.value);
		// Исправлено: проверка для нижних косточек
		if (value < settingsAbacus.beadsBottomMin) {
			value = settingsAbacus.beadsBottomMin;
		}
		if (value > settingsAbacus.beadsBottomMax) {
			value = settingsAbacus.beadsBottomMax;
		}
		setBeadsPerRodBottom(value);
	};
	return (
		<div className='container'>
			<h1>Абакус</h1>
			<div>
				<label>Количество стержней:</label>
				<input
					type='number'
					value={rodCount}
					min={settingsAbacus.rodMin}
					max={settingsAbacus.rodMax}
					onChange={handleRodCountChange}
				/>
			</div>
			<div>
				<label>Количество косточек на стержне "верх":</label>
				<input
					type='number'
					value={beadsPerRodTop}
					min={settingsAbacus.beadsBottomMin}
					max={settingsAbacus.beadsBottomMax}
					onChange={handleBeadsPerRodTopChange}
				/>
				<label>Количество косточек на стержне "низ":</label>
				<input
					type='number'
					value={beadsPerRodBottom}
					min={settingsAbacus.beadsBottomMin}
					max={settingsAbacus.beadsBottomMax}
					onChange={handleBeadsPerRodBottomChange}
				/>
			</div>
			<div>
				<label>Скин косточки:</label>
				<select onChange={e => setBeadSkin(e.target.value)} value={beadSkin}>
					{beadSkins.map(skin => (
						<option key={skin} value={skin}>
							{skin}
						</option>
					))}
				</select>
			</div>
			<div>
				<label>Скин рамки:</label>
				<select onChange={e => setFrameSkin(e.target.value)} value={frameSkin}>
					{frameSkins.map(skin => (
						<option key={skin} value={skin}>
							{skin}
						</option>
					))}
				</select>
			</div>

			<Frame>
				{Array.from({ length: rodCount }).map((_, index) => (
					<Rod
						key={index}
						skin={frameSkin}
						beadsPerRodTop={beadsPerRodTop}
						beadsPerRodBottom={beadsPerRodBottom}
						beadSkin={beadSkin}
					/>
				))}
			</Frame>
		</div>
	);
};

export default Abacus;
