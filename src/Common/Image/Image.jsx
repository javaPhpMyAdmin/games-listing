export default function Image({ url, width, height, className }) {
  return <img src={url} width={width} height={height} className={className} />;
}
