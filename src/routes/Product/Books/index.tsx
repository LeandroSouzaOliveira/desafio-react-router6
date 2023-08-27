import SectionProductDetails from "../../../components/SectionProductDetails";

export default function Books() {
  const category = "Livros";
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
