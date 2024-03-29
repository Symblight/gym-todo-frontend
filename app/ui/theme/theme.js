import { reversePalette } from 'styled-theme/composer'


const theme = {}

theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb', '#f0f8ff'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#27ae60', '#2ecc71', '#6dd298', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-seri',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1340px',
}

export default theme
