const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#b388ff',
    primary50: '#7c4dff',
    primary75: '#651fff',
    primary: '#6200ea'
  }
})

export default selectTheme
