import * as React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Icon } from '../icon/Icon';

interface RowConfig {
	style?: CSSProperties;
	className?: string;
	center?: boolean;
	onClick?: () => void;
}

export const Row: React.FC<RowConfig> = (p) => {
	const { children, style } = p;
	return (
		<RowBody className={p.className} style={style} onClick={p.onClick}>
			{children}
		</RowBody>
	);
};

const RowBody = styled.div<RowConfig>`
	display: flex;
	align-items: center;
	flex-direction: row;
	${({ center }) => center && 'justify-content: center;'}
`;

export const Spacer: React.FC<{ size: number; h?: boolean }> = ({
	size,
	h,
}) => <SpaceBody horizontal={h} s={size} />;

const SpaceBody = styled.div<{ s: number; horizontal?: boolean }>`
	display: flex;
	flex-shrink: 0;
	${({ s, horizontal }) =>
		horizontal
			? `
  height: 1px;
  width: ${s}px;
  `
			: `
  height: ${s}px;
  width: 1px;
  `}
`;

export const List = styled.div<{ center?: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ center }) => (center ? 'center' : 'start')};
`;

interface IconButtonProps {
	name: string;
	color: string;
	size: number;
	onClick?: () => void;
	style?: any;
	className?: string;
	disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = (p) => {
	return (
		<IconButtonB
			className={p.className}
			onClick={p.onClick}
			style={p.style}
			name={p.name}
			color={p.color}
			size={p.size}
			disabled={p.disabled}
		/>
	);
};

const IconButtonB = styled(Icon)<{ disabled?: boolean }>`
	cursor: pointer;

	${({ disabled }) => disabled && 'pointer-events:none;'}

	transition: opacity .1s ease-in-out;

	&:hover {
		opacity: 0.6;
	}

	&:active {
		opacity: 0.5;
	}
`;

interface BoxWrapperConf {
	row?: boolean;
	style?: CSSProperties;
	className?: string;
	smaller?: boolean;
	center?: boolean;
}

export const BoxWrapper: React.FC<BoxWrapperConf> = (p) => {
	return (
		<BoxWrapperB className={p.className} style={p.style} center={p.center}>
			{p.children}
		</BoxWrapperB>
	);
};

const BoxWrapperB = styled.div<BoxWrapperConf>`
	flex-direction: ${({ row }) => (row ? 'row' : 'column')};
	align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
	justify-content: flex-start;
	width: calc(100% - 40px);
	display: flex;
	padding: 0px 20px;

	${({ smaller }) => `
	@media only screen and (min-width: ${smaller ? 800 : 1100}px) {
		justify-content: center;
		max-width: ${smaller ? 800 : 1100}px;
		margin: 0 auto;
	}`}
`;

interface CenterType {
	style?: CSSProperties;
	className?: string;
}

export const Center: React.FC<CenterType> = (p) => {
	return (
		<CenterB className={p.className} style={p.style}>
			{p.children}
		</CenterB>
	);
};

const CenterB = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Fill = styled.div`
	display: flex;
	flex-grow: 1;
	flex: 1;
	flex-shrink: 0;
`;
