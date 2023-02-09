let _data = [];

const renderTable = (nameTerm) => {
  const tableBody = document.getElementById("table-body");

  let source = _data;

  if (nameTerm) {
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { id, name, value }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${value}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;

  console.log(`data rendered`);
};

fetch(`./data.json`)
  .then((data) => data.json())
  .then((data) => {
    console.log(`data loaded`);
    _data = data;
    renderTable();
  });

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  renderTable(term);
};

const onReset = () => {
  renderTable();
};
