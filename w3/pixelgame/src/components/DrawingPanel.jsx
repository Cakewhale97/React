import Row from './Row';

function DrawingPanel({ dimensions, color }) {
    const rows = Array.from({ length: dimensions.height }, (_, i) => <Row key={i} width={dimensions.width} color={color} />);

    return <div>{rows}</div>;
}

export default DrawingPanel;