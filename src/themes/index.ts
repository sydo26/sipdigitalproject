export interface Theme {
  background: {
    primary: string
    secondary: string
  }
  text: string
  button: {
    primary: string
    secondary: string
  }
  input: {
    border: string
  }
  font: string
}

export const darkSchema: Theme = {
  background: {
    primary: '#212121',
    secondary: '#333333',
  },
  button: {
    primary: '#DC6842',
    secondary: '#3F516D',
  },
  input: {
    border: '#212121',
  },
  text: '#FFFFFF',
  font: 'Roboto',
}

export const lightSchema: Theme = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F2',
  },
  button: {
    primary: '#DC6842',
    secondary: '#3F516D',
  },
  input: {
    border: '#FFFFFF',
  },
  text: '#333333',
  font: 'Roboto',
}
