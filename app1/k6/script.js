import http from 'k6/http';
import { check } from 'k6';

const HOST_IP = __ENV.HOST_IP

export const options = {
  stages: [
    { target: 20, duration: '2m' }
  ]
};

export default function () {
  const res = http.get(`http://localhost:53767/shipping`);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200
  });
}