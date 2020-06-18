import React from 'react';
import { useDispatch } from 'react-redux';

import SidebarComponent from '../components/Sidebar';

function Sidebar() {
  const dispatch = useDispatch();

  const onHandleClose = () => {
    console.log('Fechar');
  };

  return (
    <SidebarComponent username="Thalles Carvalho" onClose={onHandleClose} />
  );
}

export default Sidebar;
