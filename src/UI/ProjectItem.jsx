import React from "react";

const ProjectItem = ({ item }) => {
  return (
    <>
      {item.map((row, index) => (
        <div className="grid grid-cols-1  sm:grid-cols-3 gap-6" key={row?.id}>
          <RowImage rowImage={row} />
          {console.log(index, "i ma inde")}
        </div>
      ))}
    </>
  );
};
const RowImage = ({ rowImage: row }) => {
  return (
    <>
      <div className="col-span-1 place-content-center grid gap-y-5">
        {row.slice(0, 2).map((image) => (
          <img key={image.id} src={image.image} alt="project" />
        ))}
      </div>
      <div className="col-span-1 place-content-center grid">
        {row.slice(2, 3).map((image) => (
          <img key={image.id} src={image.image} alt="project" />
        ))}
      </div>
      <div className="col-span-1 grid gap-y-5 place-content-center ">
        {row.slice(3, 5).map((image) => (
          <img key={image.id} src={image.image} alt="project" />
        ))}
      </div>
      <div className=" col-span-1 grid gap-y-5 place-content-center">
        {row.slice(5, 6).map((image) => (
          <img key={image.id} src={image.image} alt="project" />
        ))}
      </div>
      <div className="col-span-1 grid gap-y-5 place-content-center ">
        {row.slice(6, 8).map((image) => (
          <img key={image.id} src={image.image} alt="project" />
        ))}
      </div>
      <div className="col-span-1 grid place-content-center ">
        {row.slice(8, 9).map((image) => (
          <img key={image.id} src={image.image} alt="project" />
        ))}
      </div>
    </>
  );
};

export default ProjectItem;
