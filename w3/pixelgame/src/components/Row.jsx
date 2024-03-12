import Pixel from './Pixel';

function Row({ width, color }) {
    const pixels = Array.from({ length: width }, (_, i) => <Pixel key={i} color={color} />);

    return <div style={{ display: 'flex' }}>{pixels}</div>;
}

export default Row;