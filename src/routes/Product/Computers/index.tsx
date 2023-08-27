import SectionProductDetails from "../../../components/SectionProductDetails";

export default function Computers() {
  const category = "Computadores";
  return (
    <>
      <main>
        <section>
          <SectionProductDetails category={category} />
        </section>
      </main>
    </>
  );
}
