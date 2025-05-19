export function filterData(searchTxt, restaurants) {
    return restaurants.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }