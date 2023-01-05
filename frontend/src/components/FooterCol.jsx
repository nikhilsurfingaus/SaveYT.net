import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    margin-left: 15px;
    font-family: 'Roboto', sans-serif;
  }
  li {
    margin-bottom: 1rem;
    list-style-type: none;
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    color: white;
    font-family: 'Roboto', sans-serif;

  }
  a:hover {
    color: black;
  }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'Help',
      path: '/help',
    },
    {
        type: 'Link',
        title: 'Install',
        path: '/install',
      },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}