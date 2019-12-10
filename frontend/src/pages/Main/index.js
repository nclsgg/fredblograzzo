import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Main() {
  api.get('meetups');

  return <h1>Main</h1>;
}
