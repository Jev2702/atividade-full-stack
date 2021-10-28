import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Nome',
    path: '/nome',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Dados Git',
    path: '/dados',
    icon: <FaIcons.FaGithub />,
    cName: 'nav-text'
  },
  {
    title: 'Todo',
    path: '/todo',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text'
  }
];
