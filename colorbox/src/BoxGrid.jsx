import Box from "./Box"
export default function BoxGrid({ numBoxes }) {
    const boxes = [...Array(numBoxes)].map((_, index) => <Box key={index} />);
    return <div>{boxes}</div>;
}