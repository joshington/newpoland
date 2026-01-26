
export default function OfficialCard({ image, name, title }: any) {
  return (
    <div className="official-card">
      <img src={image} />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}
