import React from 'react'
import { useTheme } from '@mdx-deck/components'

const Footer = ({ index }) => {
  const theme = useTheme();
  return (
    <ul
      css={{
        position: 'fixed',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        right: 0,
        bottom: 0,
        margin: 16,
        color: theme.colors.text,
        listStyleType: 'none',
        opacity: 0.50,
        zIndex: 3,
        li: {
          padding: 8,
          fontSize: '22px'
        },
        a: {
          color: theme.colors.text,
          textDecoration: 'none',
        }
      }}
    >
      <li>{index}</li>
      <li><a href={theme.metadata.event_twitter_link}>{theme.metadata.event_twitter}</a></li>
      <li><a href={theme.metadata.repository} style={{ textDecoration: `underline` }}>see the code</a></li>
      <li css={{ flexGrow: 1 }}></li>
      <li>{theme.metadata.author}</li>
      <li><a href={`https://twitter.com/${theme.metadata.twitter}`}>{theme.metadata.twitter}</a></li>
    </ul>
  );
}

export default Footer