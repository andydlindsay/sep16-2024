const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15,
  },
  {
    id: 2,
    name: 'Bob',
    points: 10,
  },
  {
    id: 3,
    name: 'Carol',
    points: 5,
  },
];

const axios = {
  get: (url) => {
    if (url === '/api/students') {
      // resolve with student data
    }
    if (url === '/api/interviewers') {
      // resolve with interviewer data
    }

    return Promise.resolve({
      data
    })
  },
  post: (url, data) => {},
  put: (url, data) => {} 
};

export default axios;
