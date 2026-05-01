
// components/OfficialCard.tsx
import Image from "next/image";

interface OfficialCardProps {
  image: string;
  name: string;
  title: string;
}

export default function OfficialCard({ image, name, title }: OfficialCardProps) {
  return (
    <div className="official-card">
      <Image src={image} alt={name} width={140} height={140} className="official-image" />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}