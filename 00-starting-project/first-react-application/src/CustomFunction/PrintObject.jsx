function PrintObject({ data }) {
  console.log({ data });
  return (
    <div>
      <h4> Name : {data.name}</h4>
      <h4> City :{data.city}</h4>
    </div>
  );
}
export default PrintObject;

export function PrintColleges({ data }) {
  console.log("print colleges", data);
  return (
    <div>
      <h1>{data[2]}</h1>
    </div>
  );
}
