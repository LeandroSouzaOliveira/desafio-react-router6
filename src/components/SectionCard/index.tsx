import "./style.css";

type Props = {
  text: string;
};

export default function SectionCard({ text }: Props) {
  return (
    <main>
      <section>
        <div className="container mgt30">
          <h1>{text}</h1>
        </div>
      </section>
    </main>
  );
}
