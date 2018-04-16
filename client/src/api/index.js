import axios from 'axios';

const BASE_URL = 'http://localhost:7777';

export async function loadCategories() {
  const { data } = await axios({
    method: 'GET',
    url: `${BASE_URL}/category/`,
  });
  // console.log(data);
  return data;
}

export async function updateCategoy() {
  return true;
}
