export { Caller } from './src/caller';
export { Frame } from './src/frame';
export { NonTabular } from './src/non-tabular';
export { NotEnabled } from './src/not-enabled';
export { Notice } from './src/notice';
export { PanelFooter } from './src/panel-footer';
export { QMComponent } from './src/component';
export { Tabular } from './src/tabular';
export { Toggler } from './src/toggler';
export { Warning } from './src/warning';

export interface iPanelProps {
	data: any;
	id: string;
	enabled: boolean;
}
