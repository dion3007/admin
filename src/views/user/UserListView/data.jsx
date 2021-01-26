import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    privilege: 'admin',
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    status: 'tidak aktif'
  },
  {
    id: uuid(),
    privilege: 'admin',
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    status: 'aktif'
  },
];
