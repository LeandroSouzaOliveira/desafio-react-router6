import SectionProductDetails from "../../../components/SectionProductDetails";

export default function Electronics() {
  const category = "Eletronicos";
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
