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
      width="100%"
      height="300"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      title="Google Map"
      src={src}
    ></iframe>
  );
};

export default MapComponent;
