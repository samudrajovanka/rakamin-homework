const generateTableData = (tableEl, peoples) => {
  const tableDataBodyEl = tableEl.children[1];

  peoples.forEach((people, idx) => {
    const rowElement = document.createElement('tr');

    const tabelDataNumber = document.createElement('td');
    tabelDataNumber.innerText = idx + 1;
    rowElement.appendChild(tabelDataNumber);
    
    const tabelDataName = document.createElement('td');
    tabelDataName.innerText = people.name;
    rowElement.appendChild(tabelDataName);

    const tabelDataAge = document.createElement('td');
    tabelDataAge.innerText = `${people.age} tahun`;
    rowElement.appendChild(tabelDataAge);

    const tabelDataMoney = document.createElement('td');
    tabelDataMoney.innerText = `Rp. ${people.money}`;
    rowElement.appendChild(tabelDataMoney);

    tableDataBodyEl.appendChild(rowElement);
  });
}

const getAverage = (numbers) => {
  console.log(numbers);
  const totalNumber = numbers.reduce((res, number) => res + +number, 0);

  return totalNumber / numbers.length;
};

const generateResume = (tableEl, peoples) => {
  const noteEl = document.createElement('p');
  let message = '';

  if (peoples.length) {
    const [moneys, ages] = peoples.reduce((res, people) => {
      res[0] = [...res[0], people.money];
      res[1] = [...res[1], people.age];

      return res;
    },[[], []]);

    const averageMoney = getAverage(moneys);
    const averageAge = getAverage(ages);
    message = 'Rata rata pendaftar memiliki uang sangu sebesar Rp. '
      + averageMoney.toFixed(2)
      + ' dengan rata rata umur '
      + Math.floor(averageAge);
      + ' tahun'
  } else {
    message = 'Data masih kosong';
  }

  noteEl.innerText = message;
  tableEl.after(noteEl);
}

document.addEventListener('DOMContentLoaded', async () => {
  const tableEl = document.querySelector('#table-data');
  const peoples = await Database.getAll();

  generateTableData(tableEl, peoples);
  generateResume(tableEl, peoples);
});
