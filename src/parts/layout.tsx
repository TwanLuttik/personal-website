import styled from 'styled-components';

export const Spacer: React.FC<{ size: number }> = (p) => {
	return <SpacerBody size={p.size}></SpacerBody>;
};

const SpacerBody = styled.div<{ size: number }>`
	padding: ${({ size }) => size}px;
`;
