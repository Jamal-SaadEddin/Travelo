const MapComponent = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const src = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en;z=14&output=embed`;

  return (
    <iframe
      style={{
        border: 0,
        borderRadius: 4,
      }}
      width="100%"
      height="300"
      title="Google Map"
      src={src}
    />
  );
};

export default MapComponent;
