interface Props {
  text: string;
}

function SectionTitle({ text }: Props) {
  return <h2 className="text-3xl font-bold">{text}</h2>;
}

export default SectionTitle;
