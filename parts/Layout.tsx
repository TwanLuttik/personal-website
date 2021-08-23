import { CSSProperties } from 'react';
import styled from 'styled-components';

export const Fill: React.FC = () => {
	return <FillB />;
};

const FillB = styled.div`
	display: flex;
	flex-grow: 1;
`;

interface RowType {
	style?: CSSProperties;
}
export const Row: React.FC<RowType> = (p) => {
	return <RowB {...p}>{p.children}</RowB>;
};

const RowB = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Spacer: React.FC<{ size: number }> = ({ size, children }) => {
	return <SpacerB size={size}>{children}</SpacerB>;
};

const SpacerB = styled.div<{ size: number }>`
	height: ${({ size }) => size}px;
	width: ${({ size }) => size}px;
`;
