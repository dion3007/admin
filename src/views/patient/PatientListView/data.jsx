import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    idPasien: '#K000012345',
    phone: '0812-1811-1234',
    gender: 'Laki-laki',
    cluster: 'Bayi',
    address: 'Jl. Pesantren alfalaq loji ',
    symptomps: 'Sesak nafas',
    diagnose: 'covid'
  },
  {
    id: uuid(),
    idPasien: '#K000012346',
    phone: '0812-1811-1233',
    gender: 'Perempuan',
    cluster: 'Dewasa',
    address: 'Jl. Pesantren alfalaq loji ',
    symptomps: 'Sesak nafas',
    diagnose: 'covid'
  },
];
