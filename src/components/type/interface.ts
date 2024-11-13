export interface FrameProps {
	children: React.ReactNode;
}

export interface RodProps {
	skin: string;
	beadsPerRodTop: number;
	beadsPerRodBottom: number;
	beadSkin: string;
}

export interface BeadProps {
	skin: string;
}

export interface SettingsAbacusProps {
	rodMin: number;
	rodMax: number;
	beadsMin: number;
	beadsMax: number;
}
