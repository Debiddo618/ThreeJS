const Cube = ({ scale = 1 }) => {
  return (
    <>
      <mesh position-x={2} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" scale={scale} />
      </mesh>
    </>
  );
};

export default Cube;
