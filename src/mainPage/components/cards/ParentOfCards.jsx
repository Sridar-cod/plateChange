import Card from "../cards/Card";
const ParentOfCards = ({ filterData,locationId }) => {
  return (
    <>
      <div className="leftRightMar mb-4 ">
        <section>
          <p className="popFont-big-gray">{filterData.length} results</p>
          <h4 className="card-title-text">Available dishes near you</h4>
        </section>
        <section className="parent-card-section gap-5 mb-4">
          <Card data={filterData} locationId={locationId} />
        </section>
      </div>
    </>
  );
};

export default ParentOfCards;
